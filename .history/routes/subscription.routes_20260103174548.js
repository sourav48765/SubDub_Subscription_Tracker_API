import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.('/', (req, res) => res.send({title: 'Get all subscriptions'}));

subscriptionRouter.post('/', (req, res) => res.send({title: 'Get all subscriptions'}));

subscriptionRouter.post('/', (req, res) => res.send({title: 'Get all subscriptions'}));

subscriptionRouter.post('/', (req, res) => res.send({title: 'Get all subscriptions'}));

subscriptionRouter.post('/', (req, res) => res.send({title: 'Get all subscriptions'}));

subscriptionRouter.post('/', (req, res) => res.send({title: 'Get all subscriptions'}));


export default subscriptionRouter;