import { config } from 'dotenv';

config( {path: `.env.${process.env.NODE_ENV || 'd'}`});

export const { PORT } = process.env;

