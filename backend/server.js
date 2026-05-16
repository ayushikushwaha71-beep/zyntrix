const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load env vars
dotenv.config();

const app = express();

/* =========================
   CORS CONFIG (FIXED)
========================= */
const corsOptions = {
    origin: [
        'http://localhost:5173',
        'https://zyntrix-etyw.vercel.app'
    ],
    credentials: true,
};

// Middleware
app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

app.use(express.json());

console.log('Server started - CORS enabled');

/* =========================
   ROUTES
========================= */
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/notes', require('./routes/noteRoutes'));
app.use('/api/ai', require('./routes/aiRoutes'));
app.use('/api/dashboard', require('./routes/dashboardRoutes'));

/* =========================
   HEALTH CHECK
========================= */
app.get('/', (req, res) => {
    res.send('Backend is running 🚀');
});

/* =========================
   SERVER START
========================= */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});