const errorMiddleware = (err, req, res, next) => {
}

// Create a subscription -> middleware (check for renewal date) -> ,middleware(check for errors) -> next -> controller