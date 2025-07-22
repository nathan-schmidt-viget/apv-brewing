import { GoogleGenAI } from "@google/genai";

const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
  console.warn('GEMINI_API_KEY not found. Please set REACT_APP_GEMINI_API_KEY in your environment variables.');
}

const ai = GEMINI_API_KEY ? new GoogleGenAI({apiKey: GEMINI_API_KEY}) : null;

async function gemini(type, description) {
  if (!ai) {
    console.error('Cannot run Gemini API without API key');
    return;
  }
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `
        I am making ${type} with the following description: ${description}.
        Please generate a name for it. List only three names in a json format that matches [{name: ''}]
      `,
    });
    const cleanNames = response.text.replace(/```json\n?|\n?```/g, '');
    const names = JSON.parse(cleanNames.trim());
    console.log(names);
    return names;
  } catch (error) {
    console.error('Error calling Gemini API:', error);
  }
}

export default gemini;
