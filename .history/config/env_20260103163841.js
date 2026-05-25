import { config } from 'dotenv';

config( {path: `.env.${process.env}`});

export const { PORT } = process.env;

