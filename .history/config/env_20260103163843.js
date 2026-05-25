import { config } from 'dotenv';

config( {path: `.env.${process.env.N}`});

export const { PORT } = process.env;

