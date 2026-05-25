import aj from "../config/arcjet.js";

const arcjetMiddleware = async (req, res, next) => {
    try {
        const decision = await aj.protect(req, res);   
        
        if(decision.isDenied()){
            if(decision.isRateLimited()){
                return res.status(429).json({ message: 'Too many requests. Please try again later.' });
            }
        }    
    } catch (error) {
        console.log(`Arcjet Middleware Error: ${error}`);
        next(error);
    }
}    
        