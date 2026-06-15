const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

// Enable CORS so the React app can talk to the backend
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const EMAIL_USER = process.env.EMAIL_USER || 'evgroutandcarpetcleaning@gmail.com';
const EMAIL_PASS = process.env.EMAIL_PASS || 'iolc whei tond cdct';

// Create nodemailer transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  family: 4, // Force IPv4 to bypass Google's SMTP block/timeout on Render's IPv6 range
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS
  }
});

// Verify email configuration
transporter.verify((error, success) => {
  if (error) {
    console.error('Mail transporter configuration error:', error);
  } else {
    console.log('Mail server is ready to take messages');
  }
});

// API endpoint for sending emails
app.post('/api/send-email', (req, res) => {
  const { name, phone, email, serviceType, service, location, message } = req.body;

  // Simple validation
  if (!name || !phone || !email) {
    return res.status(400).json({ success: false, error: 'Name, phone, and email are required.' });
  }

  // Format service name for display
  const serviceLabels = {
    'tile-grout': 'Tile & Grout Deep Clean',
    'regrouting': 'Regrouting & Protection Sealing',
    'carpet-steam': 'Carpet Steam Cleaning',
    'stain-removal': 'Spot & Pet Stain Removal',
    'end-lease': 'End of Lease Carpet Clean'
  };
  const chosenService = service || serviceType;
  const readableService = serviceLabels[chosenService] || chosenService || 'Not specified';

  // Admin email notification options
  const mailOptions = {
    from: `"EV Cleaning Lead" <${EMAIL_USER}>`,
    to: EMAIL_USER, // Admin email
    replyTo: email, // Direct reply to customer email
    subject: `New Lead: ${name} - ${readableService}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Lead Notification</title>
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f4f6f9;
            color: #333333;
            margin: 0;
            padding: 0;
            line-height: 1.6;
          }
          .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
            overflow: hidden;
            border: 1px solid #e1e4e8;
          }
          .header {
            background-color: #0b1f3a;
            color: #ffffff;
            padding: 30px 20px;
            text-align: center;
          }
          .header h1 {
            margin: 0;
            font-size: 24px;
            font-weight: 600;
            color: #ffffff;
          }
          .header p {
            margin: 5px 0 0 0;
            color: #f5b841; /* Gold color */
            font-size: 14px;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .content {
            padding: 30px 25px;
          }
          .lead-title {
            font-size: 18px;
            font-weight: bold;
            color: #0b1f3a;
            border-bottom: 2px solid #f5b841;
            padding-bottom: 8px;
            margin-top: 0;
            margin-bottom: 20px;
          }
          .details-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 25px;
          }
          .details-table td {
            padding: 12px 10px;
            border-bottom: 1px solid #eef2f5;
            vertical-align: top;
          }
          .details-table td.label {
            font-weight: 600;
            color: #555555;
            width: 30%;
          }
          .details-table td.value {
            color: #111111;
          }
          .message-box {
            background-color: #f8fafc;
            border-left: 4px solid #0b1f3a;
            padding: 15px;
            border-radius: 4px;
            margin-bottom: 25px;
            font-style: italic;
          }
          .actions {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #eef2f5;
          }
          .btn {
            display: inline-block;
            background-color: #0b1f3a;
            color: #ffffff !important;
            text-decoration: none;
            padding: 12px 24px;
            border-radius: 4px;
            font-weight: 600;
            font-size: 14px;
            margin: 5px;
          }
          .btn-call {
            background-color: #25D366; /* WhatsApp/Call Green */
          }
          .footer {
            background-color: #f8fafc;
            color: #777777;
            text-align: center;
            padding: 15px 20px;
            font-size: 12px;
            border-top: 1px solid #eef2f5;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>EV Grout & Carpet Cleaning</h1>
            <p>New Booking Request</p>
          </div>
          <div class="content">
            <h2 class="lead-title">Customer Details</h2>
            <table class="details-table">
              <tr>
                <td class="label">Name:</td>
                <td class="value"><strong>${name}</strong></td>
              </tr>
              <tr>
                <td class="label">Phone:</td>
                <td class="value">
                  <a href="tel:${phone}" style="color: #0b1f3a; text-decoration: none; font-weight: bold;">${phone}</a>
                </td>
              </tr>
              <tr>
                <td class="label">Email:</td>
                <td class="value">
                  <a href="mailto:${email}" style="color: #0b1f3a; text-decoration: none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td class="label">Service:</td>
                <td class="value"><span style="background-color: #eef2f5; padding: 4px 8px; border-radius: 4px; font-weight: 600;">${readableService}</span></td>
              </tr>
              ${location ? `
              <tr>
                <td class="label">Location:</td>
                <td class="value"><strong>${location}</strong></td>
              </tr>
              ` : ''}
            </table>

            <h2 class="lead-title">Special Instructions / Message</h2>
            <div class="message-box">
              ${message ? message.replace(/\n/g, '<br>') : 'No instructions provided.'}
            </div>

            <div class="actions">
              <a href="tel:${phone}" class="btn btn-call">Call Customer</a>
              <a href="mailto:${email}" class="btn">Email Customer</a>
            </div>
          </div>
          <div class="footer">
            <p>This lead was generated from your website contact form.</p>
            <p>&copy; ${new Date().getFullYear()} EV Grout & Carpet Cleaning. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `
  };

  // Respond to the client immediately for a fast UX
  res.status(200).json({ success: true });

  // Send the email asynchronously in the background
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Background email delivery failed:', error);
    } else {
      console.log('Background email sent successfully:', info.response);
    }
  });
});

// Serve frontend build static files in production
app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
