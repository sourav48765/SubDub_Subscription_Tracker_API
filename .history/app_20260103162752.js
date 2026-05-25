import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send(body:'Welcome to the subscription tracker API:');
});

app.listen