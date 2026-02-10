
import { GoogleGenAI, Type } from "@google/genai";

export async function generateProductDescription(productName: string) {
  try {
    // Initialize AI instance right before API call to avoid global crashes
    // and ensure it captures the latest env variables.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Generate a high-conversion sales description for a digital product named "${productName}". Focus on productivity and quantum AI tech themes. Keep it under 100 words.`,
      config: {
        temperature: 0.8,
        topP: 0.9,
      }
    });
    
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error generating content. Please try again.";
  }
}

export async function generateAgentArticle() {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: 'Write a short, futuristic blog post about the integration of AGI and Quantum Computing for 2025.',
    });
    
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The quantum bridge is currently stabilizing. Please check back soon.";
  }
}
