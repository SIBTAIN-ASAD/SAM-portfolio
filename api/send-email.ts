import { VercelRequest, VercelResponse } from '@vercel/node';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.VITE_SENDGRID_API_KEY || '');

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const msg = {
    to: 'sibtain5652@gmail.com',
    from: 'sibtain5652@gmail.com',
    subject: `Portfolio Contact from ${name}`,
    text: message,
    html: `<p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Message:</strong> ${message}</p>`,
  };

  try {
    await sgMail.send(msg);
    res.status(200).json({ message: 'Email sent successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to send email.' });
  }
}
