import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="mt-auto px-margin py-lg border-t border-white/5 bg-surface-container-lowest">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-lg">
                <div className="col-span-2 md:col-span-1">
                    <div className="flex items-center gap-xs mb-md">
                        <img alt="Logo" className="h-6 w-6" src="https://lh3.googleusercontent.com/aida/ADBb0uhwHrGuit4RtBEb7Ro_dLgqN41Dc9YF1fnkwHYsXYNezM36Lx0ZK2ZeP4-I_ux2xph5khjDv7-yEIszGAUy6n1SGZ1WNQDQdgU6PK9qETBQI_8DyVPlscL8AloycymIjj5Ta02d2IfR8HtP_u2136hfGQrR1hoa0UKHTiiJKjaQ5hP_KbXepaOUXVH4RR3OMP3deNR69GPuma5UaKZlOY98CxcbOevPc81QRYKtDuPaiGPC8VCXBM6wLtw"/>
                        <span className="font-display-lg text-[24px] text-primary tracking-tighter">Zyntrix</span>
                    </div>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">Note-taking, reimagined for the digital age.</p>
                </div>
                <div>
                    <h4 className="font-label-sm text-label-sm text-on-surface mb-sm">Product</h4>
                    <ul className="space-y-xs font-label-sm text-label-sm text-on-surface-variant">
                        <li className="hover:text-primary cursor-pointer">AI Features</li>
                        <li className="hover:text-primary cursor-pointer">Mobile App</li>
                        <li className="hover:text-primary cursor-pointer">Changelog</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-label-sm text-label-sm text-on-surface mb-sm">Resources</h4>
                    <ul className="space-y-xs font-label-sm text-label-sm text-on-surface-variant">
                        <li className="hover:text-primary cursor-pointer">Documentation</li>
                        <li className="hover:text-primary cursor-pointer">Community</li>
                        <li className="hover:text-primary cursor-pointer">API</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-label-sm text-label-sm text-on-surface mb-sm">Company</h4>
                    <ul className="space-y-xs font-label-sm text-label-sm text-on-surface-variant">
                        <li className="hover:text-primary cursor-pointer">About</li>
                        <li className="hover:text-primary cursor-pointer">Privacy</li>
                        <li className="hover:text-primary cursor-pointer">Terms</li>
                    </ul>
                </div>
            </div>
            <div className="mt-xl pt-lg border-t border-white/5 text-center font-label-sm text-label-sm text-on-surface-variant/50">
                © 2026 Zyntrix Technologies Inc. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
