const jwt = require('jsonwebtoken');
const { users } = require('../controllers/authController');

const protect = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // Get token from header
            token = req.headers.authorization.split(' ')[1];

            // Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');

            // Get user from the token (mock store)
            const user = users.find(u => u._id === decoded.id);
            
            if (!user) throw new Error('User not found');
            
            req.user = { id: user._id, name: user.name, email: user.email };

            next();
        } catch (error) {
            console.error(error);
            res.status(401).json({ message: 'Not authorized, token failed' });
        }
    }

    if (!token) {
        res.status(401).json({ message: 'Not authorized, no token' });
    }
};

module.exports = { protect };
