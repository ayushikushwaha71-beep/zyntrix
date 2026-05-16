const { notes } = require('./noteController');

// @desc    Get dashboard stats
// @route   GET /api/dashboard/stats
const getDashboardStats = async (req, res) => {
    try {
        const userId = req.user.id;
        const userNotes = notes.filter(n => n.user === userId);

        // Total notes
        const totalNotes = userNotes.length;

        // Recently edited notes (last 5)
        const recentNotes = [...userNotes]
            .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
            .slice(0, 5)
            .map(n => ({ title: n.title, updatedAt: n.updatedAt, tags: n.tags }));

        // Most used tags
        const tagCounts = {};
        userNotes.forEach(note => {
            if (note.tags && note.tags.length > 0) {
                note.tags.forEach(tag => {
                    tagCounts[tag] = (tagCounts[tag] || 0) + 1;
                });
            }
        });

        // Sort tags by count
        const sortedTags = Object.entries(tagCounts)
            .map(([tag, count]) => ({ tag, count }))
            .sort((a, b) => b.count - a.count)
            .slice(0, 5); // top 5 tags

        res.status(200).json({
            totalNotes,
            recentNotes,
            topTags: sortedTags,
            aiRequestsThisMonth: 12 // Mock stat for now
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getDashboardStats
};
