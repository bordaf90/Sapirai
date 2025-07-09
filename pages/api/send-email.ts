import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ message: 'Invalid email' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Sapira AI Solutions" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: 'Thanks for booking a demo with Sapira!',
    html: `
      <h2>Hello 👋</h2>
      <p>Thanks for your interest in <strong>Sapira AI Solutions</strong>.</p>
      <p>One of our specialists will reach out shortly to schedule your personalized demo.</p>
      <br />
      <p>🧠 We're excited to help you boost your business with the power of AI!</p>
      <p style="color: #888;">— The Sapira Team</p>
    `,
    });

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email send error:', error);
    res.status(500).json({ message: 'Error sending email' });
  }
}
