const axios = require('axios');

// @desc    Analyze note with AI
// @route   POST /api/ai/analyze
const analyzeNote = async (req, res) => {
    try {
        const { content } = req.body;

        if (!content || content.trim() === '') {
            return res.status(400).json({ message: 'Content is required for analysis' });
        }

        const prompt = `Analyze the following note content and provide a JSON response with exactly three keys: "summary" (a brief 1-2 sentence summary), "actionItems" (an array of strings representing tasks or action items derived from the text, empty if none), and "suggestedTitle" (a short, catchy title for the note). Content: ${content}`;
        
        const apiKey = process.env.LLM_API_KEY;
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
        
        const payload = {
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: { responseMimeType: "application/json" }
        };

        const response = await axios.post(url, payload, { headers: { 'Content-Type': 'application/json' } });
        
        const responseText = response.data.candidates[0].content.parts[0].text;
        res.status(200).json(JSON.parse(responseText));

    } catch (error) {
        console.error("AI Error:", error?.response?.data || error);
        res.status(500).json({ message: 'Error processing AI request' });
    }
};

module.exports = {
    analyzeNote
};
