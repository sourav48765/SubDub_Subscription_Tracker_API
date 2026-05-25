import aj from "../config/arcjet.js";

const arcjetMiddleware = async (req, res, next) => {
    try {
        const decision = await aj.protect(req, res);   
        
        if(decision.isDenied()){
            if(decision.reason.isRateLimited()) return res.status(429).json({ erro: 'Too many requests. Please try again later.' });
            if(decision.reason.isBot()) return res.status(403).json({ error: 'Bot detected' });

            return res.status(403).json({ error: 'Access denied' });
        }    

        next();
    } catch (error) {
        console.log(`Arcjet Middleware Error: ${error}`);
        next(error);
    }
}    
        