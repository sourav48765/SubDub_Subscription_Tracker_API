import User from "../models/user.models.js";

export const getUsers = async (req, res, next) => {
    try {
        const users =  await User.find();

        res.status(200).json({ s
    } catch (error) {
        next(error);
    }    
}