import { Router } from "express";
import { getUsers } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.get('/', getUsers);

userRouter.get('/:id', (req, res) => res.send({title: 'Get user details'}));

userRouter.post('/', (req, res) => res.send({title: 'Create new User'}));

userRouter.put('/:id', (req, res) => res.send({title: 'Update user'}));

userRouter.delete('/:id', (req, res) => res.send({title: 'Delete user'}));

export default userRouter;
