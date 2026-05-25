import nodemailer from 'nodemailer';
import { EMAIL_PASSWORD } from './env.js';

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {     
        user: 'deadbeat4876@gmail.comm