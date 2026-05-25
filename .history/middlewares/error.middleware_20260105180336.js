const errorMiddleware = (err, req, res, next) => {
    try{

    }
    catch (error) {
        next(e)
    }    
}

// Create a subscription -> middleware (check for renewal date) -> ,middleware(check for errors) -> next -> controller