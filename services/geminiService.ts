
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateFAQAnswer = async (question: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Provide a concise, professional, and helpful beauty industry expert answer to the following question: "${question}"`,
      config: {
        systemInstruction: "You are a senior aesthetician and beauty expert. Your tone is sophisticated, knowledgeable, and welcoming.",
      }
    });
    return response.text || "I'm sorry, I couldn't generate an answer at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error generating expert advice. Please try again later.";
  }
};

export const suggestProductDescription = async (productName: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Write a luxurious 2-sentence marketing description for a beauty product named: "${productName}"`,
    });
    return response.text || "";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "A premium addition to your daily routine.";
  }
};
