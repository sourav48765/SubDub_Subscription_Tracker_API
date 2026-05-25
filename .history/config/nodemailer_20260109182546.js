import nodemailer from 'nodemailer';
import { EMAIL_PASSWORD } from './env.js';

export co

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {     
        user: 'deadbeat4876@gmail.com',
        pass: EMAIL_PASSWORD,
    },
});

export default transporter;