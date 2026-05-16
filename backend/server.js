const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load env vars
dotenv.config();

const app = express();

const corsOptions = {
    origin: [
        'http://localhost:5173', 
        'https://zyntrix-2l1l.vercel.app', 
        'https://zyntrix-7w3h.vercel.app' 
    ],
    credentials: true,
};
// Middleware
app.use(cors(corsOptions));
app.use(express.json());

console.log('Using in-memory data store for testing. Database connection bypassed.');

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/notes', require('./routes/noteRoutes'));
app.use('/api/ai', require('./routes/aiRoutes'));
app.use('/api/dashboard', require('./routes/dashboardRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});