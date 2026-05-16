import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authAPI } from '../services/api';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await authAPI.login({ email, password });
            localStorage.setItem('token', res.data.token);
            navigate('/dashboard');
        } catch (error) {
            alert(error.response?.data?.message || 'Login failed');
        }
    };

    return (
        <div className="flex justify-center items-center min-h-[80vh] px-margin">
            <div className="w-full max-w-md glass-card rounded-xl p-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none"></div>
                <h2 className="font-display-lg text-[32px] text-center mb-md text-primary">Welcome Back</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-sm relative z-10">
                    <div>
                        <label className="font-label-sm text-label-sm text-on-surface-variant block mb-base">Email or Username</label>
                        <input 
                            type="text" 
                            className="w-full bg-surface-container/50 border border-white/10 rounded-lg px-sm py-xs text-on-surface focus:outline-none focus:border-primary transition-colors"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className="font-label-sm text-label-sm text-on-surface-variant block mb-base">Password</label>
                        <input 
                            type="password" 
                            className="w-full bg-surface-container/50 border border-white/10 rounded-lg px-sm py-xs text-on-surface focus:outline-none focus:border-primary transition-colors"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="w-full mt-sm px-sm py-xs rounded-lg bg-primary text-on-primary font-label-sm text-label-sm hover:brightness-110 active:scale-95 transition-all neon-glow">
                        Sign In
                    </button>
                </form>
                <div className="mt-md text-center">
                    <p className="font-label-sm text-label-sm text-on-surface-variant">
                        Don't have an account? <Link to="/register" className="text-primary hover:underline">Sign up</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
