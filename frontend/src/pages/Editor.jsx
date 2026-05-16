import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { noteAPI } from "../services/api";

const Editor = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [tags, setTags] = useState('');
    const [isSaving, setIsSaving] = useState(false);
    
    // AI State
    const [aiSummary, setAiSummary] = useState('');
    const [aiActionItems, setAiActionItems] = useState([]);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [isPublic, setIsPublic] = useState(false);
    const [shareId, setShareId] = useState('');
    const saveTimer = useRef(null);

    useEffect(() => {
        if (id && id !== 'new') {
            const fetchNote = async () => {
                try {
                    const res = await noteAPI.getNote(id);
                    setTitle(res.data.title);
                    setContent(res.data.content);
                    setTags(res.data.tags.join(', '));
                    setIsPublic(res.data.isPublic);
                    setShareId(res.data.shareId);
                } catch (error) {
                    console.error(error);
                    if (error.response?.status === 401) navigate('/login');
                }
            };
            fetchNote();
        }
    }, [id, navigate]);

    // Auto-save
    useEffect(() => {
        if (saveTimer.current) clearTimeout(saveTimer.current);
        
        saveTimer.current = setTimeout(async () => {
            if (title || content) {
                setIsSaving(true);
                try {
                    const tagArray = tags ? tags.split(',').map(t => t.trim()) : [];
                    if (id === 'new') {
                        const res = await noteAPI.createNote({ title, content, tags: tagArray });
                        navigate(`/note/${res.data._id}`, { replace: true });
                    } else {
                        await noteAPI.updateNote(id, { title, content, tags: tagArray });
                    }
                } catch (error) {
                    console.error('Save failed', error);
                } finally {
                    setIsSaving(false);
                }
            }
        }, 1500);
        
        return () => clearTimeout(saveTimer.current);
    }, [title, content, tags, id, navigate]);

    const handleAnalyze = async () => {
        setIsAnalyzing(true);
        try {
            const res = await aiAPI.analyzeNote(content);
            setAiSummary(res.data.summary);
            setAiActionItems(res.data.actionItems || []);
        } catch (error) {
            console.error('AI Analysis failed', error);
            alert('AI Analysis failed');
        } finally {
            setIsAnalyzing(false);
        }
    };
    
    const handleShare = async () => {
        if (id === 'new') return alert('Please save the note first by typing something.');
        try {
            const res = await noteAPI.toggleShare(id);
            setIsPublic(res.data.isPublic);
            setShareId(res.data.shareId);
        } catch (error) {
            console.error(error);
            alert('Share failed');
        }
    };

    return (
        <div className="max-w-6xl mx-auto px-margin py-xl min-h-[80vh] flex flex-col md:flex-row gap-lg">
            {/* Editor Area */}
            <div className="flex-1 flex flex-col gap-sm">
                <div className="flex justify-between items-center mb-xs">
                    <button onClick={() => navigate('/dashboard')} className="flex items-center gap-xs text-on-surface-variant hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                        Back
                    </button>
                    <div className="flex items-center gap-md">
                        <button onClick={handleShare} className="text-on-surface-variant hover:text-primary transition-colors text-label-sm font-label-sm flex items-center gap-xs">
                            <span className="material-symbols-outlined text-[16px]">{isPublic ? 'public' : 'lock'}</span>
                            {isPublic ? 'Public' : 'Private'}
                        </button>
                        <div className="text-on-surface-variant font-label-sm text-label-sm flex items-center gap-xs">
                            {isSaving ? (
                                <><span className="material-symbols-outlined text-[14px] animate-spin">sync</span> Saving...</>
                            ) : (
                                <><span className="material-symbols-outlined text-[14px] text-primary">cloud_done</span> Saved</>
                            )}
                        </div>
                    </div>
                </div>
                {isPublic && shareId && (
                    <div className="bg-primary/10 text-primary px-sm py-xs rounded text-label-sm font-label-sm border border-primary/20 flex justify-between items-center">
                        <span>Shared Link: {window.location.origin}/share/{shareId}</span>
                        <button onClick={() => navigator.clipboard.writeText(`${window.location.origin}/share/${shareId}`)} className="hover:underline">Copy</button>
                    </div>
                )}

                <input 
                    type="text" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Note Title"
                    className="bg-transparent border-none outline-none font-display-lg text-[32px] md:text-[40px] text-primary placeholder-on-surface-variant/50 w-full"
                />
                <input 
                    type="text" 
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    placeholder="Tags (comma separated)"
                    className="bg-transparent border-none outline-none font-label-sm text-label-sm text-on-surface-variant placeholder-on-surface-variant/50 w-full mb-md"
                />
                
                <textarea 
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Start typing your ideas..."
                    className="flex-1 w-full bg-surface-container/20 border border-white/5 rounded-xl p-md text-on-surface font-body-md focus:outline-none focus:border-primary/50 transition-colors resize-none min-h-[400px]"
                />
            </div>

            {/* AI Assistant Sidebar */}
            <div className="w-full md:w-80 flex flex-col gap-md">
                <div className="glass-card rounded-xl p-md sticky top-24">
                    <div className="flex items-center gap-xs mb-md border-b border-white/10 pb-sm">
                        <span className="material-symbols-outlined text-primary" data-icon="auto_awesome">auto_awesome</span>
                        <h3 className="font-headline-lg text-[20px]">AI Assistant</h3>
                    </div>

                    <p className="font-label-sm text-label-sm text-on-surface-variant mb-md">
                        Generate insights, summaries, and action items from your current note.
                    </p>

                    <button 
                        onClick={handleAnalyze} 
                        disabled={isAnalyzing || !content}
                        className={`w-full py-sm rounded-lg font-label-sm text-label-sm transition-all ${isAnalyzing || !content ? 'bg-surface-variant text-on-surface-variant cursor-not-allowed' : 'bg-primary text-on-primary hover:brightness-110 active:scale-95 neon-glow'}`}
                    >
                        {isAnalyzing ? 'Analyzing...' : 'Analyze Note'}
                    </button>

                    {aiSummary && (
                        <div className="mt-md space-y-md animate-in fade-in slide-in-from-bottom-4">
                            <div>
                                <h4 className="font-label-sm text-label-sm text-primary mb-xs">Summary</h4>
                                <p className="font-body-md text-[14px] text-on-surface">{aiSummary}</p>
                            </div>
                            
                            {aiActionItems.length > 0 && (
                                <div>
                                    <h4 className="font-label-sm text-label-sm text-secondary mb-xs">Action Items</h4>
                                    <ul className="space-y-xs">
                                        {aiActionItems.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-xs text-[14px] text-on-surface">
                                                <span className="material-symbols-outlined text-[16px] text-secondary mt-1">check_circle</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Editor;
