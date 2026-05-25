import mongoose from "mongoose";

export const signUp = async(req, res, next) => {
    const session= await mongoose.startSession();
    session.startTransaction();
}

export const signIn = (req, res, next) => {}

export const signOut = (req, res, next) => {}
