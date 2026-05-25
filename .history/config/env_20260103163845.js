import { config } from 'dotenv';

config( {path: `.env.${process.env.NODE_}`});

export const { PORT } = process.env;

