const express = require('express');
const router = express.Router();
const {
    getNotes,
    getNoteById,
    createNote,
    updateNote,
    deleteNote,
    shareNote,
    getPublicNote
} = require('../controllers/noteController');
const { protect } = require('../middleware/authMiddleware');

router.route('/')
    .get(protect, getNotes)
    .post(protect, createNote);

router.route('/public/:shareId')
    .get(getPublicNote);

router.route('/:id')
    .get(protect, getNoteById)
    .put(protect, updateNote)
    .delete(protect, deleteNote);

router.route('/:id/share')
    .put(protect, shareNote);

module.exports = router;
