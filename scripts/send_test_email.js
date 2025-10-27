require('dotenv').config({ path: '.env.local' });
const nodemailer = require('nodemailer');

(async () => {
  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    SENDER_EMAIL,
    CONTACT_EMAIL,
  } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error('Missing SMTP config in .env.local');
    process.exit(1);
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 587,
    secure: Number(SMTP_PORT) === 465, // true for 465, false for other ports
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  try {
    // Verify connection configuration
    const ok = await transporter.verify();
    console.log('Transport verified:', ok);

    const info = await transporter.sendMail({
      from: SENDER_EMAIL,
      to: CONTACT_EMAIL,
      subject: 'Portfolio SMTP test',
      text: 'This is a test email sent from a local script to verify SMTP settings.',
    });

    console.log('Message sent:', info.messageId || info.response);
    process.exit(0);
  } catch (err) {
    console.error('Send failed:', err && err.message ? err.message : err);
    console.error(err);
    process.exit(1);
  }
})();
