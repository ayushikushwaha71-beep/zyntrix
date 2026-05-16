import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div className="relative">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-margin py-xl overflow-hidden">
                {/* Decorative Glows */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 blur-[120px] rounded-full"></div>
                
                <div className="z-10 max-w-4xl">
                    <div className="inline-flex items-center px-sm py-base rounded-full glass-card border-white/20 mb-lg">
                        <span className="material-symbols-outlined text-primary text-[18px] mr-xs" data-icon="auto_awesome">auto_awesome</span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">V2.0 is now live</span>
                    </div>
                    
                    <h1 className="font-display-lg text-[48px] md:text-[84px] leading-tight mb-md bg-gradient-to-r from-primary via-secondary to-primary-container bg-clip-text text-transparent drop-shadow-2xl">
                        Note-Taking,<br/>Reimagined.
                    </h1>
                    
                    <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto mb-lg">
                        Harness the power of neural-sync technology. Zyntrix blends advanced AI reasoning with an ethereal glass interface to transform how you capture, connect, and collaborate.
                    </p>
                    
                    <div className="flex flex-col md:flex-row items-center justify-center gap-md">
                        <Link to="/register" className="px-lg py-sm rounded-lg bg-gradient-to-r from-primary-container to-secondary-container text-white font-headline-lg-mobile neon-glow hover:scale-105 transition-all duration-300">
                            Get Started for Free
                        </Link>
                        <button className="px-lg py-sm rounded-lg glass-card text-on-surface font-headline-lg-mobile hover:bg-white/10 transition-all">
                            Watch Demo
                        </button>
                    </div>
                </div>

                {/* Hero Image Preview */}
                <div className="mt-xl w-full max-w-6xl glass-card rounded-lg overflow-hidden border-white/20 shadow-2xl relative group">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f15] via-transparent to-transparent z-20 pointer-events-none"></div>
                    <img className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700" alt="Zyntrix Dashboard Preview" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxZMAvpIeqmqov9D_Re5wBPehahlTAEEkXW1rgQq8i8gDvgQ40-70n3NDymrDaf7gib1zrqCgJ5u6w4MHc4lMLp_9gBXZUZcKcrYwf5VclGl6ouHjnnj05LgtYWbJ-LJGhN4tJMtlb_bhdaeKKO5zV2ZncrU_Q7ShpRBc48qCYGR3ehqQZ05KTnHPRlSHgt5dAT99AXFt2surwon0Y6u79EeBawSTfpTdvdhfzCwTZc7LCaMAA_hnNZlO2aBGmza4rTdLWysbgyWk"/>
                    
                    {/* AI Pulse Component */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full bg-primary/40 blur-md animate-pulse"></div>
                        <div className="w-8 h-8 rounded-full bg-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_20px_rgba(221,183,255,0.8)]"></div>
                    </div>
                </div>
            </section>

            {/* Features Bento Grid */}
            <section className="px-margin py-xl max-w-7xl mx-auto">
                <div className="mb-lg text-center md:text-left">
                    <h2 className="font-headline-lg text-headline-lg text-primary mb-sm">Intelligent Ecosystem</h2>
                    <p className="font-body-md text-body-md text-on-surface-variant">The future of digital thought architecture.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-12 gap-md h-auto md:h-[600px]">
                    {/* AI Assistant Card */}
                    <div className="md:col-span-8 glass-card rounded-lg p-lg relative overflow-hidden flex flex-col justify-end group">
                        <div className="absolute top-0 right-0 p-lg opacity-20 group-hover:opacity-40 transition-opacity">
                            <span className="material-symbols-outlined text-[120px] text-primary" data-icon="psychology">psychology</span>
                        </div>
                        <div className="relative z-10">
                            <div className="inline-block p-xs rounded bg-primary/10 border border-primary/20 mb-sm">
                                <span className="material-symbols-outlined text-primary" data-icon="auto_awesome">auto_awesome</span>
                            </div>
                            <h3 className="font-headline-lg text-[24px] md:text-[32px] mb-sm">AI Assistant</h3>
                            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                                Neural context awareness that understands your notes as you write them. Summarize, brainstorm, and generate connections across your entire workspace automatically.
                            </p>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                    </div>

                    {/* Real-time Collaboration */}
                    <div className="md:col-span-4 glass-card rounded-lg p-lg flex flex-col items-center text-center justify-center group">
                        <div className="w-16 h-16 rounded-full bg-secondary/10 border border-secondary/20 flex items-center justify-center mb-md group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-secondary text-[32px]" data-icon="group">group</span>
                        </div>
                        <h3 className="font-headline-lg text-[24px] md:text-[32px] mb-sm">Real-time</h3>
                        <p className="font-label-sm text-label-sm text-on-surface-variant">
                            Collaborate with low-latency sync. Watch ideas evolve as your team works together in a fluid, unified environment.
                        </p>
                    </div>

                    {/* End-to-End Sync */}
                    <div className="md:col-span-5 glass-card rounded-lg p-lg flex flex-col justify-between group">
                        <h3 className="font-headline-lg text-[24px] md:text-[32px]">Omnipresent Sync</h3>
                        <div className="flex items-end justify-between">
                            <p className="font-label-sm text-label-sm text-on-surface-variant max-w-[200px]">
                                Your data follows you. Securely encrypted and instantly accessible on every device you own.
                            </p>
                            <span className="material-symbols-outlined text-tertiary text-[40px]" data-icon="sync">sync</span>
                        </div>
                    </div>

                    {/* Dark Security */}
                    <div className="md:col-span-7 glass-card rounded-lg p-lg relative overflow-hidden flex items-center gap-lg group">
                        <div className="flex-1">
                            <h3 className="font-headline-lg text-[24px] md:text-[32px] mb-sm">Quantum Encryption</h3>
                            <p className="font-body-md text-body-md text-on-surface-variant">
                                Every byte is protected by industry-leading E2EE protocols. Your privacy is our architecture's foundation.
                            </p>
                        </div>
                        <div className="hidden md:flex w-32 h-32 rounded-lg border border-white/10 bg-white/5 items-center justify-center overflow-hidden">
                            <span className="material-symbols-outlined text-on-surface-variant text-[64px]" data-icon="security" style={{fontVariationSettings: "'FILL' 1"}}>security</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-xl px-margin text-center">
                <div className="max-w-4xl mx-auto glass-card rounded-xl p-xl border-primary/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 pointer-events-none"></div>
                    <h2 className="font-display-lg text-[32px] md:text-[48px] mb-md">Ready for the Next Era?</h2>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-lg">Join 50,000+ creators building their digital brain with Zyntrix.</p>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-md">
                        <Link to="/register" className="px-xl py-sm rounded-lg bg-primary text-on-primary font-headline-lg-mobile neon-glow hover:brightness-110 active:scale-95 transition-all">
                            Create Your Workspace
                        </Link>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">No credit card required.</span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Landing;
