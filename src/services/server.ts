import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

sgMail.setApiKey(process.env.VITE_SENDGRID_API_KEY || '');

app.post('/send-email', async (req, res) => {
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
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
