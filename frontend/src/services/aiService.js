import { buildMockTripData, normalizeTripData } from "./moroccoData";

const TIMEOUT_MS = 30000;
const OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions";

export const generateTripData = async ({
  location,
  noOfDays,
  traveler,
  budget,
  lang = "FR"
}) => {
  const safeLocation = (location || "Marrakech").trim();
  const safeDays = Number(noOfDays) > 0 ? String(Number(noOfDays)) : "3";
  const safeTraveler = traveler || "Solo";
  const safeBudget = budget || "Moderate";

  const fallbackArgs = {
    location: safeLocation,
    noOfDays: safeDays,
    traveler: safeTraveler,
    budget: safeBudget,
    lang: lang
  };

  // Get API key from .env
  const apiKey = process.env.REACT_APP_OPENROUTER_API_KEY;

  if (!apiKey) {
    console.info("[AI Service] No OpenRouter API key found. Using premium fallback simulation.");
    return buildMockTripData(safeLocation, safeDays, safeTraveler, safeBudget, lang);
  }

  // Construct prompt requesting localized text based on the selected language
  const languageInstructions = {
    FR: "Toutes les descriptions, noms de lieux, détails d'activités et titres doivent être rédigés en Français.",
    EN: "All descriptions, place names, activity details, and titles must be written in English.",
    AR: "يجب أن تكون جميع الأوصاف وأسماء الأماكن وتفاصيل الأنشطة والعناوين مكتوبة باللغة العربية."
  };

  const selectedLangInstruct = languageInstructions[lang] || languageInstructions["FR"];

  const PROMPT = `
Generate a travel itinerary plan for Morocco in JSON format.
Destination: ${safeLocation}
Duration: ${safeDays} Days
Travel Group: ${safeTraveler}
Budget Level: ${safeBudget}

Language constraint:
${selectedLangInstruct}

Return a JSON object conforming exactly to this schema:
{
  "hotel_options": [
    {
      "name": "Hotel/Riad Name",
      "address": "Hotel/Riad Address",
      "price": "Estimated price per night in MAD (e.g. 500 MAD)",
      "rating": "Rating out of 5",
      "description": "Short appealing description of the hotel/riad in the selected language"
    }
  ],
  "itinerary": [
    {
      "day": "Day label (e.g. Day 1 / Jour 1 / اليوم 1)",
      "plan": [
        {
          "time": "Time of day (Morning/Matin/صباحا, Lunch/Midi/غداء, Afternoon/Après-midi/بعد الزوال, Evening/Soir/مساء)",
          "place": "Name of the place/monument/restaurant",
          "details": "Engaging description of what to do there in the selected language",
          "ticket_pricing": "Estimated ticket fee/cost in MAD (e.g. Free or 70 MAD)",
          "rating": "Rating out of 5"
        }
      ]
    }
  ]
}

Make sure the output is strict JSON only, with NO wrapping markdown formatting, no code fences, no extra text. Only the raw JSON object.
  `;

  try {
    // Run with timeout race
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error("OpenRouter API request timed out")), TIMEOUT_MS)
    );

    const apiCallPromise = (async () => {
      const response = await fetch(OPENROUTER_URL, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          "HTTP-Referer": window.location.origin,
          "X-Title": "Morocco AI Travel Planner"
        },
        body: JSON.stringify({
          model: "google/gemini-2.0-flash-001",
          messages: [
            {
              role: "system",
              content: "You are a professional Morocco travel planner AI. You return only valid JSON with no extra text or formatting."
            },
            {
              role: "user",
              content: PROMPT
            }
          ],
          temperature: 0.7,
          max_tokens: 4000
        })
      });

      if (!response.ok) {
        const errBody = await response.text();
        throw new Error(`OpenRouter API error ${response.status}: ${errBody}`);
      }

      const data = await response.json();
      const content = data?.choices?.[0]?.message?.content || "{}";

      // Clean potential markdown code fences from the response
      const cleaned = content
        .replace(/```json\s*/gi, "")
        .replace(/```\s*/g, "")
        .trim();

      return JSON.parse(cleaned);
    })();

    const parsedData = await Promise.race([apiCallPromise, timeoutPromise]);

    if (parsedData && typeof parsedData === "object") {
      return normalizeTripData(parsedData, fallbackArgs);
    }
  } catch (error) {
    console.warn("[AI Service] Failed to generate with OpenRouter. Using fallback mock.", error.message);
  }

  // Fallback
  return buildMockTripData(safeLocation, safeDays, safeTraveler, safeBudget, lang);
};
