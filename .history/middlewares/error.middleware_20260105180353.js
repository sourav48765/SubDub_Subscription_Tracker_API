
const errorMiddleware = (err, req, res, next) => {
    try{
        let erorr = { ...err };
    }
    catch (error) {
        next(error);
    }    
}

// Create a subscription -> middleware (check for renewal date) -> ,middleware(check for errors) -> next -> controller