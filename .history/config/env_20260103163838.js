import { config } from 'dotenv';

config( {path: `.env.${pr}`});

export const { PORT } = process.env;

