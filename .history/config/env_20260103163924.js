import { config } from 'dotenv';

config( {path: `.env.${process.env.NODE_ENV || 'deve'}`});

export const { PORT } = process.env;

