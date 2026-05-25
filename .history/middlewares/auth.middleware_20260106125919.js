const authorize = async (req, res, next) => {
    try {
        let token;

        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            

    } catch (error) {
        res.status(401).json({ message: 'Unauthorized', error: error.message });
    }       
}        
