import { config } from 'dotenv';

config( {path: `.env.${process.env.NODE_EN}`});

export const { PORT } = process.env;

