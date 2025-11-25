'use server';

import nodemailer from 'nodemailer';

export async function sendEmail(formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    if (!name || !email || !subject || !message) {
        return { error: 'Please fill in all fields.' };
    }

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    try {
        await transporter.sendMail({
            from: `"${name}" <${process.env.SMTP_USER}>`, // sender address
            to: process.env.CONTACT_EMAIL, // list of receivers
            replyTo: email,
            subject: `Portfolio Contact: ${subject}`, // Subject line
            text: message, // plain text body
            html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `, // html body
        });

        return { success: true };
    } catch (error) {
        console.error('Error sending email:', error);
        return { error: 'Failed to send email. Please try again later.' };
    }
}
