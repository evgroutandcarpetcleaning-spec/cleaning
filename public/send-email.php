<?php
// Allow CORS for local development testing
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "error" => "Method Not Allowed"]);
    exit;
}

// Get raw JSON data from request body
$json = file_get_contents('php://input');
$data = json_decode($json, true);

// Validate required fields
$name = isset($data['name']) ? trim($data['name']) : '';
$phone = isset($data['phone']) ? trim($data['phone']) : '';
$email = isset($data['email']) ? trim($data['email']) : '';
$service = isset($data['service']) ? trim($data['service']) : (isset($data['serviceType']) ? trim($data['serviceType']) : 'Not specified');
$location = isset($data['location']) ? trim($data['location']) : '';
$message = isset($data['message']) ? trim($data['message']) : '';

if (empty($name) || empty($phone) || empty($email)) {
    http_response_code(400);
    echo json_encode(["success" => false, "error" => "Name, phone, and email are required."]);
    exit;
}

// Format service label for display
$serviceLabels = [
    'tile-grout' => 'Tile & Grout Deep Clean',
    'regrouting' => 'Regrouting & Protection Sealing',
    'carpet-steam' => 'Carpet Steam Cleaning',
    'stain-removal' => 'Spot & Pet Stain Removal',
    'end-lease' => 'End of Lease Carpet Clean'
];
$readableService = isset($serviceLabels[$service]) ? $serviceLabels[$service] : $service;

// Email Content
$to = "evgroutandcarpetcleaning@gmail.com";
$subject = "New Lead Request: " . $name . " - " . $readableService;

$htmlContent = '
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333333; background-color: #f9f9f9; padding: 20px; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; padding: 30px; border-radius: 8px; border: 1px solid #e0e0e0; }
    .header { border-bottom: 2px solid #0056b3; padding-bottom: 15px; margin-bottom: 20px; }
    .header h2 { margin: 0; color: #0056b3; }
    .field { margin-bottom: 12px; }
    .label { font-weight: bold; color: #555555; }
    .value { margin-top: 5px; color: #111111; }
    .footer { font-size: 12px; color: #777777; margin-top: 25px; border-top: 1px solid #eeeeee; padding-top: 15px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>New Booking/Quote Request</h2>
    </div>
    <div class="field">
      <span class="label">Customer Name:</span>
      <div class="value">' . htmlspecialchars($name) . '</div>
    </div>
    <div class="field">
      <span class="label">Phone Number:</span>
      <div class="value"><a href="tel:' . htmlspecialchars($phone) . '">' . htmlspecialchars($phone) . '</a></div>
    </div>
    <div class="field">
      <span class="label">Email Address:</span>
      <div class="value"><a href="mailto:' . htmlspecialchars($email) . '">' . htmlspecialchars($email) . '</a></div>
    </div>
    <div class="field">
      <span class="label">Requested Service:</span>
      <div class="value">' . htmlspecialchars($readableService) . '</div>
    </div>';

if (!empty($location)) {
    $htmlContent .= '
    <div class="field">
      <span class="label">Location / Suburb:</span>
      <div class="value">' . htmlspecialchars($location) . '</div>
    </div>';
}

if (!empty($message)) {
    $htmlContent .= '
    <div class="field">
      <span class="label">Message:</span>
      <div class="value">' . nl2br(htmlspecialchars($message)) . '</div>
    </div>';
}

$htmlContent .= '
    <div class="footer">
      <p>This lead was generated from your website contact form.</p>
    </div>
  </div>
</body>
</html>';

// Secure Socket SMTP Email Sender Function
function send_smtp_email($to, $subject, $htmlContent, $fromEmail, $fromName) {
    $smtpUser = "evgroutandcarpetcleaning@gmail.com";
    $smtpPass = "iolc whei tond cdct";
    $smtpHost = "ssl://smtp.gmail.com";
    $smtpPort = 465;
    $timeout = 15;

    $socket = fsockopen($smtpHost, $smtpPort, $errno, $errstr, $timeout);
    if (!$socket) {
        return false;
    }

    // Read greeting
    fgets($socket, 512);

    // EHLO
    fwrite($socket, "EHLO localhost\r\n");
    fgets($socket, 512);

    // AUTH LOGIN
    fwrite($socket, "AUTH LOGIN\r\n");
    fgets($socket, 512);

    // Send User
    fwrite($socket, base64_encode($smtpUser) . "\r\n");
    fgets($socket, 512);

    // Send Pass
    fwrite($socket, base64_encode($smtpPass) . "\r\n");
    fgets($socket, 512);

    // MAIL FROM
    fwrite($socket, "MAIL FROM: <$smtpUser>\r\n");
    fgets($socket, 512);

    // RCPT TO
    fwrite($socket, "RCPT TO: <$to>\r\n");
    fgets($socket, 512);

    // DATA
    fwrite($socket, "DATA\r\n");
    fgets($socket, 512);

    // Build mail payload
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $headers .= "From: \"$fromName\" <$smtpUser>\r\n";
    $headers .= "Reply-To: <$fromEmail>\r\n";
    $headers .= "To: <$to>\r\n";
    $headers .= "Subject: $subject\r\n";

    fwrite($socket, $headers . "\r\n" . $htmlContent . "\r\n.\r\n");
    fgets($socket, 512);

    // QUIT
    fwrite($socket, "QUIT\r\n");
    fclose($socket);

    return true;
}

// Send SMTP Email
if (send_smtp_email($to, $subject, $htmlContent, $email, $name)) {
    echo json_encode(["success" => true]);
} else {
    http_response_code(500);
    echo json_encode(["success" => false, "error" => "Failed to send email. Please check server SMTP network connectivity."]);
}
?>
