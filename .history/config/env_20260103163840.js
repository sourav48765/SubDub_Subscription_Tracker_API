import { config } from 'dotenv';

config( {path: `.env.${process.}`});

export const { PORT } = process.env;

