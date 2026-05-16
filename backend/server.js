const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(express.json());

app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}));

app.get("/", (req, res) => {
    res.send("Backend working 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Server running on", PORT);
});

const corsOptions = {
    origin: [
        'http://localhost:5173', 
        'https://zyntrix-frontend.vercel.app' // <-- Yahan apna Main Frontend Link daalein
    ],
    credentials: true,
};
app.use(cors(corsOptions));