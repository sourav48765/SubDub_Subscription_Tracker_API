import nodemailer from 'nodemailer';
import { EMAIL_PASSWORD } from './env.js';

const transporter = nodemailer.createTransport({