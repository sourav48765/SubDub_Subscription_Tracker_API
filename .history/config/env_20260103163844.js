import { config } from 'dotenv';

config( {path: `.env.${process.env.NODE}`});

export const { PORT } = process.env;

