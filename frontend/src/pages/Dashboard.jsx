import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { dashboardAPI, noteAPI } from '../services/api';

const Dashboard = () => {
    const [notes, setNotes] = useState([]);
    const [stats, setStats] = useState({ totalNotes: 0, aiRequestsThisMonth: 0 });
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const notesRes = await noteAPI.getNotes();
                setNotes(notesRes.data);
                const statsRes = await dashboardAPI.getStats();
                setStats(statsRes.data);
            } catch (error) {
                console.error(error);
                if (error.response?.status === 401) {
                    navigate('/login');
                }
            }
        };
        fetchData();
    }, [navigate]);

    const filteredNotes = notes.filter(n => n.title.toLowerCase().includes(search.toLowerCase()));

    const handleCreateNew = () => {
        navigate('/note/new');
    };

    return (
        <div className="max-w-7xl mx-auto px-margin py-xl min-h-[80vh]">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-lg gap-sm">
                <div>
                    <h1 className="font-display-lg text-[32px] md:text-[40px] text-primary">Your Workspace</h1>
                    <p className="font-body-md text-on-surface-variant">Organize and create new ideas.</p>
                </div>
                <button onClick={handleCreateNew} className="flex items-center gap-xs px-sm py-xs rounded-lg bg-primary text-on-primary font-label-sm text-label-sm hover:brightness-110 active:scale-95 transition-all neon-glow">
                    <span className="material-symbols-outlined text-[18px]">add</span>
                    New Note
                </button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-sm mb-lg">
                <div className="glass-card rounded-lg p-sm">
                    <h3 className="font-label-sm text-on-surface-variant mb-xs">Total Notes</h3>
                    <p className="font-headline-lg text-[24px] text-primary">{stats.totalNotes}</p>
                </div>
                <div className="glass-card rounded-lg p-sm">
                    <h3 className="font-label-sm text-on-surface-variant mb-xs">AI Insights</h3>
                    <p className="font-headline-lg text-[24px] text-secondary">{stats.aiRequestsThisMonth}</p>
                </div>
            </div>

            {/* Search and Filter */}
            <div className="flex items-center gap-sm mb-md">
                <div className="relative flex-1 max-w-md">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">search</span>
                    <input 
                        type="text" 
                        placeholder="Search notes..." 
                        className="w-full bg-surface-container/50 border border-white/10 rounded-lg pl-10 pr-sm py-xs text-on-surface focus:outline-none focus:border-primary transition-colors"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </div>

            {/* Notes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-sm">
                {filteredNotes.map(note => (
                    <Link to={`/note/${note._id}`} key={note._id} className="glass-card rounded-lg p-md hover:bg-white/5 transition-colors group cursor-pointer border-l-4 border-l-transparent hover:border-l-primary flex flex-col justify-between min-h-[160px]">
                        <div>
                            <h3 className="font-headline-lg text-[20px] mb-xs group-hover:text-primary transition-colors">{note.title}</h3>
                            <div className="flex flex-wrap gap-xs mb-sm">
                                {note.tags.map(tag => (
                                    <span key={tag} className="px-2 py-1 rounded bg-surface-variant text-on-surface-variant text-[10px] uppercase tracking-wider">{tag}</span>
                                ))}
                            </div>
                        </div>
                        <p className="font-label-sm text-[12px] text-on-surface-variant/70 mt-auto">
                            Updated {new Date(note.updatedAt).toLocaleDateString()}
                        </p>
                    </Link>
                ))}
                {filteredNotes.length === 0 && (
                    <div className="col-span-3 text-center py-xl text-on-surface-variant">
                        No notes found.
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
