import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function generateGeminiImage(prompt: string): Promise<string | null> {
  try {
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro-vision:generateContent?key=AIzaSyAS9sWLU-awqF07tg-k5XxHSwNpsM_RstI",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { stopSequences: [], temperature: 0.7, maxOutputTokens: 2048 },
        }),
      }
    )
    if (!response.ok) return null
    const data = await response.json()
    const base64 = data?.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data
    if (base64) {
      return `data:image/png;base64,${base64}`
    }
    return null
  } catch (e) {
    return null
  }
}
