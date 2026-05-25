import aj from "../config/arcjet.js";

const arcjetMiddleware = async (req, res, next) => {
    try {
        const result = await aj.check(req, res);        
    } catch (error) {
        console.log(`Arcjet Middl`);
        