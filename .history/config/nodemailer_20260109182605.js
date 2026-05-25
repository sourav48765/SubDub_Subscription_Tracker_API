import nodemailer from 'nodemailer';
import { EMAIL_PASSWORD } from './env.js';

export const accountEmail = 

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {     
        user: ,
        pass: EMAIL_PASSWORD,
    },
});

export default transporter;