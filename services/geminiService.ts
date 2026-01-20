
import { GoogleGenAI, Type } from "@google/genai";
import { DIVISIONS } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getSmartRecommendation = async (userQuery: string) => {
  const model = 'gemini-3-flash-preview';
  
  const systemInstruction = `
    You are the "POS Smart Assistant". Your goal is to help users navigate the Point On Solutions (POS) ecosystem.
    
    The divisions are:
    1. Property Reset: For home decluttering, cleaning, organization, and spatial peace.
    2. Spark & Shield: For personal safety, self-defense, preparedness, and empowerment.
    3. POS Business Tools: For entrepreneurship, small business management, and professional growth.
    4. Digital Manage Your Life Tools: For productivity, time management, calendars, and digital organization.
    5. POS Fight: For handling difficult life crises, legal/medical battles, and intense personal struggles.

    Analyze the user's input and recommend which POS division(s) they should explore.
    Provide a concise, helpful, and supportive response in JSON format.
  `;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: userQuery,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            analysis: { type: Type.STRING, description: "A brief analysis of the user's current situation." },
            recommendation: { type: Type.STRING, description: "The specific POS division recommended." },
            divisionId: { type: Type.STRING, description: "The ID of the division (e.g. property_reset)." },
            helpfulTip: { type: Type.STRING, description: "One practical tip related to the recommended division." }
          },
          required: ["analysis", "recommendation", "divisionId", "helpfulTip"]
        }
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Gemini API Error:", error);
    return {
      analysis: "I'm having a little trouble connecting to my brain right now.",
      recommendation: "POS General Support",
      divisionId: "general",
      helpfulTip: "Try browsing our sections below manually while I reboot!"
    };
  }
};
