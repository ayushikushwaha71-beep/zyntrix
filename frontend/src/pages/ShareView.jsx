import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { noteAPI } from '../services/api';

const ShareView = () => {
    const { id } = useParams();
    const [note, setNote] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNote = async () => {
            try {
                const res = await noteAPI.getPublicNote(id);
                setNote(res.data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchNote();
    }, [id]);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[80vh]">
                <div className="w-16 h-16 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
            </div>
        );
    }

    if (!note) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[80vh]">
                <h2 className="font-display-lg text-[32px] text-error mb-sm">Note Not Found</h2>
                <p className="text-on-surface-variant mb-md">This note may be private or deleted.</p>
                <Link to="/" className="text-primary hover:underline">Return Home</Link>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto px-margin py-xl min-h-[80vh]">
            <div className="glass-card rounded-xl p-lg border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-md pointer-events-none">
                    <div className="inline-flex items-center gap-xs px-sm py-xs rounded bg-surface/50 border border-white/10">
                        <span className="material-symbols-outlined text-[16px] text-on-surface-variant">public</span>
                        <span className="font-label-sm text-[10px] text-on-surface-variant uppercase">Shared via Zyntrix</span>
                    </div>
                </div>

                <h1 className="font-display-lg text-[32px] md:text-[48px] text-primary mb-xs pr-32">{note.title}</h1>
                <p className="font-label-sm text-[12px] text-on-surface-variant mb-lg pb-md border-b border-white/10">
                    Last updated: {new Date(note.updatedAt).toLocaleDateString()}
                </p>

                <div className="prose prose-invert max-w-none font-body-md text-on-surface whitespace-pre-wrap">
                    {note.content}
                </div>
            </div>
            
            <div className="mt-xl text-center">
                <p className="font-body-md text-on-surface-variant mb-sm">Want to create your own notes with AI assistance?</p>
                <Link to="/register" className="inline-block px-md py-sm rounded-lg bg-primary text-on-primary font-label-sm text-label-sm hover:brightness-110 transition-all neon-glow">
                    Try Zyntrix Free
                </Link>
            </div>
        </div>
    );
};

export default ShareView;
