import { GoogleGenAI, Type } from "@google/genai";

export async function generateProductDescription(productName: string) {
  try {
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

// Employs AGI to literally invent new products using deep learning LLM structures
export async function generateAGIProduct() {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: "Invent a highly advanced digital productivity product (like software, an e-book, an AI template, or a SaaS boilerplate) to sell on an elite digital marketplace. Make it sound extremely professional, high-tech, and desirable.",
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            name: {
              type: Type.STRING,
              description: "The high-tech name of the product.",
            },
            description: {
              type: Type.STRING,
              description: "A short, punchy, high-conversion sales description.",
            },
            price: {
              type: Type.NUMBER,
              description: "The price of the product, between 19 and 299.",
            },
            category: {
              type: Type.STRING,
              description: "Must be one of: E-books, Templates, Marketing Kits, AI Packs, Business Kits, Software & Tools",
            }
          },
          required: ["name", "description", "price", "category"],
        },
      },
    });

    const jsonStr = response.text?.trim() || "{}";
    return JSON.parse(jsonStr);
  } catch (error) {
    console.error("AGI Generation Error:", error);
    return null;
  }
}