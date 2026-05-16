const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// In-memory data store for Users
let users = [];
let nextUserId = 1;

// Seed a test user
(async () => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('Zyntrix@12345', salt);
    users.push({
        _id: '1',
        name: 'Zyntrix Tester',
        email: 'zyntrixUser',
        password: hashedPassword
    });
})();

// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET || 'secret', {
        expiresIn: '30d',
    });
};

// @desc    Register new user
// @route   POST /api/auth/register
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: 'Please add all fields' });
        }

        const userExists = users.find(u => u.email === email);
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = {
            _id: (++nextUserId).toString(),
            name,
            email,
            password: hashedPassword
        };
        users.push(user);

        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Authenticate a user
// @route   POST /api/auth/login
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Allow login with either email or username
        const user = users.find(u => u.email === email || u.name === email);
        
        if (user && (await bcrypt.compare(password, user.password))) {
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                token: generateToken(user._id),
            });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get user data
// @route   GET /api/auth/me
const getMe = async (req, res) => {
    try {
        const user = users.find(u => u._id === req.user.id);
        if(!user) return res.status(404).json({ message: 'User not found' });
        
        const { password, ...userWithoutPassword } = user;
        res.status(200).json(userWithoutPassword);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    registerUser,
    loginUser,
    getMe,
    users // export for auth middleware
};
