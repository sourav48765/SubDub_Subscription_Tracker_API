
const errorMiddleware = (err, req, res, next) => {
    try{
        let erorr = { ...err };

        erorr.message = err.message;

        console.error(err);

        // Mongoose bad ObjectId
        if (err.name === 'CastError') {
            const message = `Resource not found`;
            erorr = new Error(message);
            erorr.statusCode = 404;
        }

        // Mongoose duplicate key
        if(err.code === 11000) {
            const message = 'Duplicate field value entered';
            erorr = new Error(message);
            erorr.statusCode = 400;
        }

        // Mongoose validation error
        if (err.name === 'ValidationError') {
            const message = Object.values(err.errors).map(val => val.message).join(', ')
            erorr = new Error(message);
            erorr.statusCode = 400;
        }
    }
    catch (error) {
        next(error);
    }    
}

// Create a subscription -> middleware (check for renewal date) -> ,middleware(check for errors) -> next -> controller