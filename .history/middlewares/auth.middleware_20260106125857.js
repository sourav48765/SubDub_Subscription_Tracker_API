const authorize = async (req, res, next) => {
    try {
    
        
    } catch (error) {
        res.status(401).json({ message: 'Unauthorized', error: error.message });
    }       
}        
