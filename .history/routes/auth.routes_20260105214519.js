import { Router } from "express";
import { signIn } from "../controllers/auth.controller";

const authRouter = Router();

authRouter.post('/sign-up', signU);
authRouter.post('/sign-in', );
authRouter.post('/sign-out',);

export default authRouter;