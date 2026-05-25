import { Router } from "express";

const userRouter = Router();

userRouter.get('/', );

userRouter.get('/:id', (req, res) => res.send({title: 'Get user details'}));

userRouter.post('/', (req, res) => res.send({title: 'Create new User'}));

userRouter.put('/:id', (req, res) => res.send({title: 'Update user'}));

userRouter.delete('/:id', (req, res) => res.send({title: 'Delete user'}));

export default userRouter;
