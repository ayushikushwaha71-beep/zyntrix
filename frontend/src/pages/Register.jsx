import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authAPI } from '../services/api';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await authAPI.register({ name, email, password });
            localStorage.setItem('token', res.data.token);
            navigate('/dashboard');
        } catch (error) {
            alert(error.response?.data?.message || 'Registration failed');
        }
    };

    return (
        <div className="flex justify-center items-center min-h-[80vh] px-margin">
            <div className="w-full max-w-md glass-card rounded-xl p-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent pointer-events-none"></div>
                <h2 className="font-display-lg text-[32px] text-center mb-md text-secondary">Create Account</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-sm relative z-10">
                    <div>
                        <label className="font-label-sm text-label-sm text-on-surface-variant block mb-base">Name</label>
                        <input 
                            type="text" 
                            className="w-full bg-surface-container/50 border border-white/10 rounded-lg px-sm py-xs text-on-surface focus:outline-none focus:border-secondary transition-colors"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className="font-label-sm text-label-sm text-on-surface-variant block mb-base">Email</label>
                        <input 
                            type="email" 
                            className="w-full bg-surface-container/50 border border-white/10 rounded-lg px-sm py-xs text-on-surface focus:outline-none focus:border-secondary transition-colors"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className="font-label-sm text-label-sm text-on-surface-variant block mb-base">Password</label>
                        <input 
                            type="password" 
                            className="w-full bg-surface-container/50 border border-white/10 rounded-lg px-sm py-xs text-on-surface focus:outline-none focus:border-secondary transition-colors"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="w-full mt-sm px-sm py-xs rounded-lg bg-secondary text-on-secondary font-label-sm text-label-sm hover:brightness-110 active:scale-95 transition-all shadow-[0_0_20px_rgba(5,102,217,0.4)]">
                        Sign Up
                    </button>
                </form>
                <div className="mt-md text-center">
                    <p className="font-label-sm text-label-sm text-on-surface-variant">
                        Already have an account? <Link to="/login" className="text-secondary hover:underline">Sign in</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
