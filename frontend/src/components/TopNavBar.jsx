import { Link } from 'react-router-dom';

const TopNavBar = () => {
    return (
        <header className="flex justify-between items-center w-full px-margin py-sm sticky top-0 z-50 bg-surface/60 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_40px_-10px_rgba(168,85,247,0.3)]">
            <div className="flex items-center gap-sm">
                <img alt="Zyntrix Logo" className="h-10 w-10" src="https://lh3.googleusercontent.com/aida/ADBb0uhwHrGuit4RtBEb7Ro_dLgqN41Dc9YF1fnkwHYsXYNezM36Lx0ZK2ZeP4-I_ux2xph5khjDv7-yEIszGAUy6n1SGZ1WNQDQdgU6PK9qETBQI_8DyVPlscL8AloycymIjj5Ta02d2IfR8HtP_u2136hfGQrR1hoa0UKHTiiJKjaQ5hP_KbXepaOUXVH4RR3OMP3deNR69GPuma5UaKZlOY98CxcbOevPc81QRYKtDuPaiGPC8VCXBM6wLtw"/>
                <Link to="/" className="font-display-lg text-[32px] md:text-[40px] text-primary tracking-tighter hover:opacity-80 transition-opacity">Zyntrix</Link>
            </div>
            
            <nav className="hidden md:flex items-center gap-lg">
                <Link className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-all duration-300" to="#">Product</Link>
                <Link className="font-label-sm text-label-sm text-primary border-b-2 border-primary pb-1 transition-all duration-300" to="#">Features</Link>
                <Link className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-all duration-300" to="#">Pricing</Link>
            </nav>
            
            <div className="flex items-center gap-md">
                <div className="hidden md:flex items-center gap-sm mr-sm">
                    <span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer transition-colors" data-icon="notifications">notifications</span>
                    <span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer transition-colors" data-icon="help">help</span>
                </div>
                <Link to="/login" className="px-sm py-xs rounded bg-primary-container text-on-primary-container font-label-sm text-label-sm active:scale-95 transition-transform hover:brightness-110">
                    Sign In
                </Link>
            </div>
        </header>
    );
};

export default TopNavBar;
