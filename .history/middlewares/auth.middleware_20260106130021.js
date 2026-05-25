const authorize = async (req, res, next) => {
    try {
        let token;

        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split(' ')[1];
        }

        if (!token) {
            const error = new Error('No token provided, authorization denied');
            error.statusCode = 401;
            throw error;
        }

    } catch (error) {
        res.status(401).json({ message: 'Unauthorized', error: error.message });
    }       
}        
