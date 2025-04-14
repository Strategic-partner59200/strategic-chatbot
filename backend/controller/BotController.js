const { OpenAI } = require("openai"); // Import OpenAI SDK
const puppeteer = require("puppeteer");
const dotenv = require("dotenv");
// const cheerio = require("cheerio");
// const axios = require("axios");

// Load environment variables
dotenv.config();

// Set up OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Ensure your API key is in your .env file
});

// Base URL to scrape
const TARGET_URL = "https://strategic-chatbot.vercel.app";

// Scrape a given path on the target website
async function scrapeWebsite(path = "") {
  try {
    const url = `${TARGET_URL}${path}`;
    console.log(`[INFO] Starting to scrape URL: ${url}`);

    const browser = await puppeteer.launch({
      // headless: "new",
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-dev-shm-usage",
        "--single-process",
      ],
      userDataDir: process.env.PUPPETEER_CACHE_DIR,
      headless: true,
    });
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "networkidle2" });

    // Extract all text content from the page
    const content = await page.evaluate(() => document.body.innerText.trim());

    await browser.close();
    console.log(`[INFO] Scraping completed for URL: ${url}`);
    return content;
  } catch (error) {
    console.error(`[ERROR] Failed to scrape URL (${path}): ${error.message}`);
    return null;
  }
}







let generalQuestionCount = 0;
class BotController {
  static async Botgenai(req, res) {
    const { input } = req.body;

    if (!input) {
      console.warn("[WARNING] No input provided.");
      return res.status(400).json({ message: "Input is required." });
    }

    console.log(`[INFO] Received input: ${input}`);
    let response = {};

    // Determine if scraping is needed
    const needsScraping =
      input.toLowerCase().includes("chatbot") ||
      input.toLowerCase().includes("offres") ||
      input.toLowerCase().includes("ai") ||
      input.toLowerCase().includes("ia") ||
      input.toLowerCase().includes("services") ||
      input.toLowerCase().includes("contact") ||
      input.toLowerCase().includes("contacts") ||
      input.toLowerCase().includes("comment ça marche") ||
      input.toLowerCase().includes("optimisez votre service client") ||
      input.toLowerCase().includes("comment ça fonctionne") ||
      input.toLowerCase().includes("CGU") ||
      input.toLowerCase().includes("Politique de confidentialité");

    if (needsScraping) {
      console.log("[INFO] Scraping content related to the query...");

      const scrapedMain = await scrapeWebsite();
      const scrapedOffres = await scrapeWebsite("/offres");

      const combinedContent = [scrapedMain, scrapedOffres]
        .filter(Boolean)
        .join("\n\n");

      if (combinedContent) {
        try {
          console.log("[INFO] Sending combined content to GPT...");
//           const gptPrompt = `
//           Voici le contenu extrait des pages principales et des offres du site web :

//           ${combinedContent}
// Veuillez répondre directement à la question suivante en formatant chaque point sur une nouvelle ligne. Organisez les informations avec des puces pour plus de lisibilité
// et donnez une réponse courte et professionnelle basée sur le contenu du site web.:
//           "${input}"
//           `;
const gptPrompt = `En tant que représentant de Strategic Partner, répondez à cette question : "${input}"
- Commencez par une phrase d'introduction contextuelle
- Listez les informations claires avec des puces
- Terminez par une invitation à l'action si pertinent
- Restez professionnel mais accessible`;

          const gptResponse = await openai.chat.completions.create({
            model: "gpt-4",
            max_tokens: 800,
            messages: [
              // { role: 'system', content: "You are a chatbot that organizes and structures website content into clear, professional responses." },
              {
                role: "system",
                content:
                  "Vous êtes un chatbot qui répond de manière concise, professionnelle et structurée en français. Fournissez des réponses courtes et pertinentes en évitant les explications inutiles.",
              },
              { role: "user", content: gptPrompt },
            ],
          });

          response.message = gptResponse.choices[0].message.content;
          console.log("[INFO] GPT response successfully generated.");
        } catch (error) {
          console.error(
            "[ERROR] Failed to generate GPT response:",
            error.message
          );
          response.message =
            "Je suis ici pour vous aider à en savoir plus sur Strategic Partner. Si vous avez des questions sur notre service, n'hésitez pas à me les poser !";
        }
      } else {
        console.warn("[WARNING] No content scraped from the website.");
        response.message =
          "Je suis ici pour vous aider à en savoir plus sur Strategic Partner. Si vous avez des questions sur notre service, n'hésitez pas à me les poser !";
      }
    } else if (generalQuestionCount < 2) {
      console.log("[INFO] General input detected. Responding directly...");
      const gptPromptGeneral = `Répondez à cette question générale : "${input}" de manière claire et concise.`;

      try {
        const gptResponse = await openai.chat.completions.create({
          model: "gpt-4",
          messages: [
            {
              role: "system",
              content:
                "Vous êtes un chatbot qui répond de manière concise, professionnelle et structurée en français. Fournissez des réponses courtes et pertinentes en évitant.",
            },
            { role: "user", content: gptPromptGeneral },
          ],
        });

        response.message = gptResponse.choices[0].message.content;
        generalQuestionCount++;
        console.log("[INFO] General question response generated.");
      } catch (error) {
        console.error(
          "[ERROR] Failed to generate general question response:",
          error.message
        );
        response.message =
          "Désolé, je n'ai pas pu générer une réponse pour votre question.";
      }
    } else {
      console.log(
        "[INFO] Limit reached for general questions. No response will be given."
      );
      response.message =
        "Je suis ici pour vous aider à en savoir plus sur Strategic Partner. Pour aller plus loin, vous pouvez consulter notre page de contact, remplir le formulaire ou planifier un rendez-vous avec notre équipe."
    }

    // Send the final response
    console.log("[INFO] Response sent to the frontend:", response);
    res.json(response);
  }
}

module.exports = BotController;