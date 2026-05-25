import Subscription from "../models/subscription.models.js";

export const createSubscription = async(req, res, next) => {
    try {
        const subscription = await Subscription.create({
            ...req.body,
            user: req.user._id,
        });

        res.status(201).json({ success: true, data: subscription });
    } catch (error) {
        next(error);
    }   
}    

export const getUserSubscriptions = async(req, res, next) => {
    try {
        // Check if the user is the same as the one in the token
        if(req.user.id )
    } catch (error) {
        next(error);
    }
}    