import express from 'express';

import { PORT } from './config/en'

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to the subscription tracker API:');
});

app.listen(3000, () => {
    console.log('Subscription Traker API is running on http://localhost:3000');
})

export default app;