import express from 'express';

import { PORT } from './config/env.js';

import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
impor

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to the subscription tracker API:');
});

app.listen(PORT, () => {
    console.log(`Subscription Traker API is running on http://localhost:${PORT}`);
})

export default app;