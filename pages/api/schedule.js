import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { dateTime, email } = req.body;

  // Configure Nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.YOUR_EMAIL, // Your email address
    subject: 'New Consultation Request',
    text: `New consultation scheduled:
      Date & Time: ${new Date(dateTime).toLocaleString()}
      Client Email: ${email}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    // Send confirmation to client
    await transporter.sendMail({
      ...mailOptions,
      to: email,
      subject: 'Consultation Confirmation',
      text: `Your consultation is scheduled for ${new Date(dateTime).toLocaleString()}.`,
    });
    
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false });
  }
}