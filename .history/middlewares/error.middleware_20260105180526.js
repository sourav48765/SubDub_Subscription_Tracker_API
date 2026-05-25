
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

        //
        if()
    }
    catch (error) {
        next(error);
    }    
}

// Create a subscription -> middleware (check for renewal date) -> ,middleware(check for errors) -> next -> controller