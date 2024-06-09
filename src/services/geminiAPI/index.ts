import axios from 'axios'

const geminiAPI = axios.create({
  baseURL: 'https://generativelanguage.googleapis.com',
  headers: {
    "X-Goog-Api-Key": import.meta.env.VITE_GEMINI_API_KEY
  }
});
export default geminiAPI