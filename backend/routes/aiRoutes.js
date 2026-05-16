const express = require('express');
const router = express.Router();
const { analyzeNote } = require('../controllers/aiController');
const { protect } = require('../middleware/authMiddleware');

router.post('/analyze', protect, analyzeNote);

module.exports = router;
