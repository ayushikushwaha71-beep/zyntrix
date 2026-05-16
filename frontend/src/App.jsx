import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Editor from './pages/Editor';
import ShareView from './pages/ShareView';
import TopNavBar from './components/TopNavBar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="bg-background text-on-background selection:bg-primary/30 min-h-screen flex flex-col font-['Geist']">
        <div className="fixed inset-0 z-[-1] mesh-gradient"></div>
        <TopNavBar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/note/:id" element={<Editor />} />
            <Route path="/share/:id" element={<ShareView />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
