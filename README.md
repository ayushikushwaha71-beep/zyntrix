# 🧠 Zyntrix – AI Powered Notes App

Zyntrix is a full-stack AI-powered notes application that allows users to create, manage, and enhance notes using AI. It acts as a digital "Second Brain," supporting secure authentication, intelligent search, tagging, and public sharing.

---

## 🚀 Features

- **User Authentication:** Secure login and registration using JWT.
- **Note Management:** Create, edit, and delete notes seamlessly.
- **AI Assistance:** Enhance, summarize, or generate content using the Google Gemini API.
- **Search & Filter:** Easily find notes by keywords or custom tags.
- **Public Sharing:** Generate shareable links for public notes.
- **Dashboard Insights:** View analytics and note statistics at a glance.
- **Secure Backend:** Robust API built with Node.js, Express, and MongoDB.

---

## 🛠 Tech Stack

**Frontend:**
- React (Vite)
- Tailwind CSS
- Axios

**Backend:**
- Node.js & Express.js
- MongoDB & Mongoose
- JSON Web Tokens (JWT)
- Google Gemini API

---

## 📂 Project Structure

\`\`\`text
zyntrix/
├── frontend/       # React (Vite) application
└── backend/        # Node.js & Express API
\`\`\`

---

## ⚙️ Setup Instructions

### 1. Clone the repository
\`\`\`bash
git clone https://github.com/ayushikushwaha71-beep/zyntrix.git
cd zyntrix
\`\`\`

### 2. Backend Setup
\`\`\`bash
cd backend
npm install
\`\`\`

Create a \`.env\` file in the \`backend\` directory and add the following variables:
\`\`\`env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_key
CLIENT_URL=http://localhost:5173
\`\`\`

Run the backend server:
\`\`\`bash
npm start
\`\`\`

### 3. Frontend Setup
Open a new terminal window and navigate to the frontend folder:
\`\`\`bash
cd frontend
npm install
\`\`\`

Create a \`.env\` file in the \`frontend\` directory:
\`\`\`env
VITE_API_URL=http://localhost:5000
\`\`\`

Run the frontend application:
\`\`\`bash
npm run dev
\`\`\`

---

## 🧪 Testing Features

- [x] Register / Login user
- [x] Create, edit, and delete notes
- [x] Use AI assist button for text enhancement
- [x] Search and filter notes
- [x] Generate and test public sharing links
- [x] View dashboard analytics

---

## 🌍 Deployment

- **Frontend:** Vercel
- **Backend:** Vercel 
- **Database:** MongoDB Atlas

---

## 👤 Author

**Ayushi Kushwaha** Software Developer (MERN Stack)
