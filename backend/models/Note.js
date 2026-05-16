const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    title: {
        type: String,
        required: true,
        default: 'Untitled Note'
    },
    content: {
        type: String,
        default: ''
    },
    tags: [{
        type: String
    }],
    categories: [{
        type: String
    }],
    isPublic: {
        type: Boolean,
        default: false
    },
    shareId: {
        type: String,
        unique: true,
        sparse: true
    }
}, {
    timestamps: true
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;
