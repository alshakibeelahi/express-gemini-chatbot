# Gemini API Chatbot

This is a chatbot application powered by the **Gemini API** using **Express.js**. It allows users to interact with a conversational AI model through a simple web interface.

## Features
- **Gemini API** integration for AI responses.
- Simple Express.js backend to handle API requests.
- User can send messages via a frontend UI and receive AI-generated responses.

## Prerequisites

Before running this project, ensure that you have the following installed on your machine:

- **Node.js** (v20 or higher)
- **npm** (Node package manager)
- **Gemini API Key** from Google Cloud

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/alshakibeelahi/express-gemini-chatbot
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory of the project and add your **Gemini API Key**:

   ```env
   GEMINI_API_KEY="Your Google API Key"
   MODEL_NAME = "Your Model Name"
   ```

## Running the Application

1. Start your application:

   ```bash
   node server.js
   ```

2. The app will be running on `http://localhost:5000`.

3. You can access the chatbot UI through the browser, send messages, and receive responses from the Gemini API-powered chatbot.