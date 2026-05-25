import { Router } from "express";

const userRouter = Router();

userRouter.get('/', (req, res) => res.send({title: 'Get all users'}));
userRouter.get('/:id', (req, res) => res.send({title: 'Get all '}));
userRouter.get('/', (req, res) => res.send({title: 'Get all users'}));
userRouter.get('/', (req, res) => res.send({title: 'Get all users'}));
userRouter.get('/', (req, res) => res.send({title: 'Get all users'}));
