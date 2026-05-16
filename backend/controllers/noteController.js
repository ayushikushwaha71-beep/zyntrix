const crypto = require('crypto');

// In-memory data store for Notes
let notes = [];
let nextNoteId = 1;

// @desc    Get notes
// @route   GET /api/notes
const getNotes = async (req, res) => {
    try {
        const { search, tag } = req.query;
        let userNotes = notes.filter(n => n.user === req.user.id);

        if (search) {
            userNotes = userNotes.filter(n => 
                n.title.toLowerCase().includes(search.toLowerCase()) || 
                n.content.toLowerCase().includes(search.toLowerCase())
            );
        }

        if (tag) {
            userNotes = userNotes.filter(n => n.tags.includes(tag));
        }

        // Sort descending by updated_at
        userNotes.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
        res.status(200).json(userNotes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get note by ID
// @route   GET /api/notes/:id
const getNoteById = async (req, res) => {
    try {
        const note = notes.find(n => n._id === req.params.id);

        if (!note) {
            return res.status(404).json({ message: 'Note not found' });
        }

        if (note.user !== req.user.id) {
            return res.status(401).json({ message: 'User not authorized' });
        }

        res.status(200).json(note);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Create note
// @route   POST /api/notes
const createNote = async (req, res) => {
    try {
        const { title, content, tags, categories } = req.body;

        const note = {
            _id: (++nextNoteId).toString(),
            title: title || 'Untitled Note',
            content: content || '',
            tags: tags || [],
            categories: categories || [],
            user: req.user.id,
            isPublic: false,
            shareId: null,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        notes.push(note);

        res.status(201).json(note);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Update note
// @route   PUT /api/notes/:id
const updateNote = async (req, res) => {
    try {
        const noteIndex = notes.findIndex(n => n._id === req.params.id);

        if (noteIndex === -1) {
            return res.status(404).json({ message: 'Note not found' });
        }

        if (notes[noteIndex].user !== req.user.id) {
            return res.status(401).json({ message: 'User not authorized' });
        }

        notes[noteIndex] = {
            ...notes[noteIndex],
            ...req.body,
            updatedAt: new Date().toISOString()
        };

        res.status(200).json(notes[noteIndex]);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Delete note
// @route   DELETE /api/notes/:id
const deleteNote = async (req, res) => {
    try {
        const noteIndex = notes.findIndex(n => n._id === req.params.id);

        if (noteIndex === -1) {
            return res.status(404).json({ message: 'Note not found' });
        }

        if (notes[noteIndex].user !== req.user.id) {
            return res.status(401).json({ message: 'User not authorized' });
        }

        notes.splice(noteIndex, 1);

        res.status(200).json({ id: req.params.id });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Toggle Public Share
// @route   PUT /api/notes/:id/share
const shareNote = async (req, res) => {
    try {
        const noteIndex = notes.findIndex(n => n._id === req.params.id);

        if (noteIndex === -1) {
            return res.status(404).json({ message: 'Note not found' });
        }

        if (notes[noteIndex].user !== req.user.id) {
            return res.status(401).json({ message: 'User not authorized' });
        }

        notes[noteIndex].isPublic = !notes[noteIndex].isPublic;
        if (notes[noteIndex].isPublic && !notes[noteIndex].shareId) {
            notes[noteIndex].shareId = crypto.randomBytes(8).toString('hex');
        }

        res.status(200).json({ isPublic: notes[noteIndex].isPublic, shareId: notes[noteIndex].shareId });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get Public Note
// @route   GET /api/notes/public/:shareId
const getPublicNote = async (req, res) => {
    try {
        const note = notes.find(n => n.shareId === req.params.shareId && n.isPublic);

        if (!note) {
            return res.status(404).json({ message: 'Note not found or not public' });
        }

        // Clone and remove user id
        const { user, ...noteWithoutUser } = note;

        res.status(200).json(noteWithoutUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getNotes,
    getNoteById,
    createNote,
    updateNote,
    deleteNote,
    shareNote,
    getPublicNote,
    notes // export for dashboard stats
};
