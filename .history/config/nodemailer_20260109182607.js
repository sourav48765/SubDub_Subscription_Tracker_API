import nodemailer from 'nodemailer';
import { EMAIL_PASSWORD } from './env.js';

export const accountEmail = 'deadbeat4876@gmail.com'

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {     
        user: ,
        pass: EMAIL_PASSWORD,
    },
});

export default transporter;