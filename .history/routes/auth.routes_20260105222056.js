import { Router } from "express";
import { signIn, signUp, signOut } from "../controllers/auth.controller.";

const authRouter = Router();

// Post: /api/v1/auth/sign-up (POST)
authRouter.post('/sign-up', signUp);
authRouter.post('/sign-in', signIn);
authRouter.post('/sign-out', signOut);

export default authRouter;