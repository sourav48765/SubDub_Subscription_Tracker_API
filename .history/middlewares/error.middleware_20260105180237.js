const errorMiddleware = (err, req, res, next) => {
    console.error(err);

// Create a subscription -> middleware (check for renewal date) -> ,middleware(check for errors) -> controlle