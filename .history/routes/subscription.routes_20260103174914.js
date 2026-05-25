import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => res.send({title: 'Get all subscriptions'}));

subscriptionRouter.get('/:id', (req, res) => res.send({title: 'Get subscription details'}));

subscriptionRouter.post('/', (req, res) => res.send({title: 'Create subscription'}));

subscriptionRouter.put('/:id', (req, res) => res.send({title: 'U subscription'}));

subscriptionRouter.post('/', (req, res) => res.send({title: 'Get all subscriptions'}));

subscriptionRouter.post('/', (req, res) => res.send({title: 'Get all subscriptions'}));


export default subscriptionRouter;