import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

interface NameSuggestion {
  name: string;
}

interface GeminiResponse {
  text?: string;
}

const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
  console.warn(
    "GEMINI_API_KEY not found. Please set NEXT_PUBLIC_GEMINI_API_KEY in your environment variables."
  );
}

const ai = GEMINI_API_KEY ? new GoogleGenAI({ apiKey: GEMINI_API_KEY }) : null;

export async function POST(req: Request): Promise<Response> {
  const data = await req.json();

  if (!ai) {
    console.error("Cannot run Gemini API without API key");
    return NextResponse.json(
      { error: "Cannot run Gemini API without API key" },
      { status: 500 }
    );
  }

  try {
    const response: GeminiResponse = await ai.models.generateContent({
      model: "gemini-2.5-flash-lite",
      contents: data.text,
    });

    if (!response.text) {
      console.error("No response text from Gemini API");
      return NextResponse.json(
        { error: "No response text from Gemini API" },
        { status: 500 }
      );
    }

    const cleanNames: string = response.text.replace(/```json\n?|\n?```/g, "");
    const names: NameSuggestion[] = JSON.parse(cleanNames.trim());

    return NextResponse.json(names);
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return NextResponse.json(
      { error: "Error calling Gemini API" },
      { status: 500 }
    );
  }
}
