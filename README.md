# Zyntrix Collaborative AI Notes Workspace

This is a full-stack MERN application with a React (Vite) Frontend and a Node.js (Express) Backend.
The application currently runs completely locally using an in-memory data store bypass (no MongoDB cluster required) so you can test it immediately out of the box!

## Features included
- **Frontend**: React + Vite + Tailwind CSS (Glassmorphism design matching original HTML).
- **Backend**: Express + REST API for Authentication, Notes CRUD, Dashboard Stats.
- **AI Integration**: Google Gemini API integration to analyze notes (summary and action items).

---

## 🚀 How to Run the Project Locally

### Step 1: Install Dependencies
Open two separate terminals in your VS Code.

**Terminal 1 (Backend):**
```bash
cd backend
npm install
```

**Terminal 2 (Frontend):**
```bash
cd frontend
npm install
```

### Step 2: Start the Servers
Once installations are complete, start both servers.

**Terminal 1 (Backend):**
```bash
npm start
```
*Note: The backend runs on port 5000.*

**Terminal 2 (Frontend):**
```bash
npm run dev
```
*Note: The frontend runs on port 5173. Open `http://localhost:5173/` in your browser.*

---

## 🧪 Testing Credentials

I have pre-configured a test user inside the backend so you can login and test the application immediately without needing to sign up:

- **Username / Email**: `zyntrixUser`
- **Password**: `Zyntrix@12345`

*Just type the username in the email field and the password, then click Sign In!*

---

## 🛠️ Environment Variables
The `backend/.env` file is already configured with your Google Gemini API key.
If you ever want to connect this to a real MongoDB database in the future, simply change the `DATABASE_URL` in `backend/.env` and update `backend/config/db.js` to use `mongoose.connect()`.

Enjoy using Zyntrix!
