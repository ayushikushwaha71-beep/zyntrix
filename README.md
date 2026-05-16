# Zyntrix – AI Powered Notes App

Zyntrix is a full-stack AI-powered notes application that allows users to create, manage, and enhance notes using AI (Gemini API). It also supports authentication, search, tagging, and public sharing.

---

##  Features

-  User Authentication (JWT)
-  Create, Edit, Delete Notes
-  AI-powered note enhancement (Gemini API)
-  Search & Filter by tags
-  Public note sharing
-  Dashboard insights
-  Secure backend with Express & MongoDB

---

## 🛠 Tech Stack

### Frontend
- React (Vite)
- Axios
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Gemini API integration

---

##  Project Structure


frontend/
backend/


---

##  Setup Instructions

### 1. Clone repository
```bash
git clone https://github.com/your-username/zyntrix.git
cd zyntrix
2. Backend Setup
cd backend
npm install

Create .env file:

PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_key
CLIENT_URL=http://localhost:5173

Run backend:

npm start
3. Frontend Setup
cd frontend
npm install

Create .env file:

VITE_API_URL=http://localhost:5000

Run frontend:

npm run dev
 Testing Features
Register/Login user
Create notes
Edit/delete notes
Use AI assist button
Search/filter notes
Share public link
View dashboard analytics

 Deployment
Frontend: Vercel
Backend: Vercel 
Database: MongoDB Atlas


 Author

Ayushi Kushwaha
