const authorize = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization