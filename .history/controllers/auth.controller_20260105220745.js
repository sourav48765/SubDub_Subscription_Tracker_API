import mongoose from "mongoose";
import bcrypt from "bcryptjs";

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

        const newUser = await user.create([{ name, email, password: hashedPassword }], { session });

        const token = jwt.sign({userId: newUsers[]})

        await session.commitTransaction(); 
    } catch(error){
        await session.abortTransaction();
        session.endSession();
        next(error);
    }
}

export const signIn = (req, res, next) => {}

export const signOut = (req, res, next) => {}
