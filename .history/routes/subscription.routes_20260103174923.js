import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => res.send({title: 'Get all subscriptions'}));

subscriptionRouter.get('/:id', (req, res) => res.send({title: 'Ge subscription details'}));

subscriptionRouter.post('/', (req, res) => res.send({title: 'CREATE subscription'}));

subscriptionRouter.put('/:id', (req, res) => res.send({title: 'UPDATE subscription'}));

subscriptionRouter.post('/', (req, res) => res.send({title: 'Get all subscriptions'}));

subscriptionRouter.post('/', (req, res) => res.send({title: 'Get all subscriptions'}));


export default subscriptionRouter;