import { GoogleGenAI } from "@google/genai";

interface NameSuggestion {
  name: string;
}

interface GeminiResponse {
  text?: string;
}

const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
  console.warn(
    "GEMINI_API_KEY not found. Please set REACT_APP_GEMINI_API_KEY in your environment variables."
  );
}

const ai = GEMINI_API_KEY ? new GoogleGenAI({ apiKey: GEMINI_API_KEY }) : null;

async function gemini(
  type: string,
  description: string
): Promise<NameSuggestion[]> {
  if (!ai) {
    console.error("Cannot run Gemini API without API key");
    return [];
  }

  try {
    const response: GeminiResponse = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `
        I am making ${type} with the following description: ${description}.
        Please generate a name for it. List only three names in a json format that matches [{name: ''}]
      `,
    });

    if (!response.text) {
      console.error("No response text from Gemini API");
      return [];
    }

    const cleanNames: string = response.text.replace(/```json\n?|\n?```/g, "");
    const names: NameSuggestion[] = JSON.parse(cleanNames.trim());
    console.log(names);
    return names;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return [];
  }
}

export default gemini;
