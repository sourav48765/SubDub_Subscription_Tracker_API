export const createSubscription = async(req, res, next) => {
    try {
        const subscription = await Subscription.create(req.body);

    } catch (error) {
        next(error);
    }   
}    