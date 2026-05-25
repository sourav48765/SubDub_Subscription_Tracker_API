import express from 'express';

import { PORT } from './config/env.js';

import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
import subscriptionRouter from './routes/subscription.routes.js';

const app = express();

// api/
app.use('/api/v1/auth', authRouter);

app.get('/', (req, res) => {
    res.send('Welcome to the subscription tracker API:');
});

app.listen(PORT, () => {
    console.log(`Subscription Traker API is running on http://localhost:${PORT}`);
})

export default app;