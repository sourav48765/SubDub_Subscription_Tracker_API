import { config } from 'dotenv';

config( {path: `.env.${process.env.NODE_END}`});

export const { PORT } = process.env;

