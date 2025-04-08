const express = require('express');
const axios = require('axios');
const path = require('path');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const API_KEY = process.env.GOOGLE_API_KEY;

if (!API_KEY) {
    console.error("GOOGLE_API_KEY is not set in environment variables.");
    process.exit(1);
}

const modelName = process.env.MODEL_NAME;

async function run(prompt) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${API_KEY}`;

    try {
        const response = await axios.post(url, {
            contents: [{
                parts: [{ text: prompt }]
            }]
        });

        const text = response.data.candidates[0].content.parts[0].text;
        return text;
    } catch (error) {
        console.error("API Error:", error);
        throw error;
    }
}

app.post('/chat', async (req, res) => {
    const prompt = req.body.message;

    if (!prompt) {
        return res.status(400).json({ error: "Message is required." });
    }

    try {
        const response = await run(prompt);
        res.json({ response: response });
    } catch (error) {
        res.status(500).json({ error: "An error occurred." });
    }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});