import { Router } from "express";

const authRouter = Router();

authRouter.post('/sign-up', );
authRouter.post('/sign-in', );
authRouter.post('/sign-out', (req, res) => res.send({ title: 'Sign out'}));

export default authRouter;