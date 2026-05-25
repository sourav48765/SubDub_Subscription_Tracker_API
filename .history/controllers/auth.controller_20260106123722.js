import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/user.models.js";
import { JWT_SECRET, JWT_EXPIRES_IN } from "../config/env.js";
// 

export const signUp = async(req, res, next) => {
    const session= await mongoose.startSession();
    session.startTransaction();

    try {
        const { name, email, password } = req.body;

        // check if a user already exists
        const existingUser = await User.findOne({ email });

        if(existingUser){
            const error = new Error('User already exists with this email');
            error.statusCode = 409;
            throw error;
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUsers = await User.create([{ name, email, password: hashedPassword }], { session });

        const token = jwt.sign({ userId: newUsers[0]._id}, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

        await session.commitTransaction(); 
        session.endSession();

        res.status(201).json({
            success: true,
            message: 'User registered successfully',
            data: {
                token,
                user: newUsers[0],
            }
        });
    } catch(error){
        await session.abortTransaction();
        session.endSession();
        next(error);
    }
}

export const signIn = (req, res, next) => {
    try
}

export const signOut = (req, res, next) => {}
