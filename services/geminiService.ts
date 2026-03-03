import { GoogleGenAI } from "@google/genai";

const KVI_SYSTEM_INSTRUCTION = `
You are the AI Ambassador for Kiprojects Innovations (KVI).
KVI Identity: A multinational visionary technology services & innovation company.
Slogan: "Engineering Tomorrow’s Intelligence".
Core Mission: Build digital transformation solutions for Africa and global emerging markets.

Key Services to Mention:
1. Software Engineering (Custom Apps, AI Agents, APIs, KVI Cloud Control Suite).
2. Smart Systems & IoT (Smart Cities, Industrial Automation, Environmental Sensors).
3. Cybersecurity (Threat Detection, Enterprise Encryption).
4. Media & Platforms (Streaming Tech, POS Systems, Creative Tools).

Key Products to Explain if asked:
- KVI Cloud Control Suite: All-in-one remote admin, IoT dashboard, and analytics.
- Indimba: Music app integration with secure streaming and admin publishing.
- Fab's Lounge POS: Bar management, inventory, tabs, and analytics.
- Smart Health Laboratory (Cedric Project): Hospital lab workflow, sample tracking, auto-PDF results.
- Viltec Engineering: Remote hardware dashboard and smart energy systems.
- Zambia Expansion: KVI positions Zambia as the strategic tech gateway for African logistics and innovation.

Tone: Professional, Ultramodern, Confident, Helpful, Concise.
Do not make up products not listed here.
`;

export const sendMessageToGemini = async (history: {role: string, parts: {text: string}[]}[], newMessage: string): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Convert history to format expected by Chat (though we are using single turn for simplicity in this helper, 
    // a real chat would maintain the session object).
    // For this implementation, we will use a stateless generateContent with system instruction context
    // because maintaining a Chat object across React renders requires more state management complexity.
    
    const prompt = `
    User Query: ${newMessage}
    
    Previous Context: ${JSON.stringify(history.slice(-3))}
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        systemInstruction: KVI_SYSTEM_INSTRUCTION,
      }
    });

    return response.text || "I apologize, I am processing high volumes of data. Please try again.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Connection to KVI Neural Network interrupted. Please check your connection or API key.";
  }
};