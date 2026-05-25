import { config } from 'dotenv';

config( {path: `.env.${process.env.NODE_ENV || 'develop'}`});

export const { PORT } = process.env;

