import { Router } from "express";

import au
import { getUser, getUsers } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.get('/', getUsers);

userRouter.get('/:id', getUser);

userRouter.post('/', (req, res) => res.send({title: 'Create new User'}));

userRouter.put('/:id', (req, res) => res.send({title: 'Update user'}));

userRouter.delete('/:id', (req, res) => res.send({title: 'Delete user'}));

export default userRouter;
