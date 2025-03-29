const { OpenAI } = require('openai'); // Import OpenAI SDK
const puppeteer = require('puppeteer'); // Import Puppeteer for scraping dynamic content
const dotenv = require('dotenv');


// Load environment variables
dotenv.config();

// Set up OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Ensure your API key is in your .env file
});

// URL to scrape
const TARGET_URL = "https://www.koutquekout.com";

// Scrape the website for content using Puppeteer
async function scrapeWebsite(path = "") {
  try {
    const url = `${TARGET_URL}${path}`;
    console.log(`[INFO] Starting to scrape URL: ${url}`);

    const browser = await puppeteer.launch({
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--single-process',
      ],
    });
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle2' });

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
    const { input } = req.body; // Input comes from the body

    // Log the incoming input for debugging
    console.log(`[INFO] Received input: ${input}`);

    if (!input) {
      console.warn("[WARNING] No input provided in the request body.");
      return res.status(400).json({ message: 'Input is required.' });
    }

    let response = {};

    // Check if the input relates to the target URL (special scraping-related queries)
    if (input.toLowerCase().includes('chatbot') || input.toLowerCase().includes('services') 
      || input.toLowerCase().includes('contact') || input.toLowerCase().includes('comment ça marche')
    || input.toLowerCase().includes('optimisez votre service client') || input.toLowerCase().includes('CGU') ||
  input.toLowerCase().includes('ai') || input.toLowerCase().includes('Politique de confidentialité'))
    {
    
      const scrapedData = await scrapeTargetWebsite();

      if (scrapedData) {
        try {
          console.log("[INFO] Sending scraped data to GPT for response generation...");

        //   const gptPrompt = `
        //   Voici les sections extraites du site web :

        //   - Comment fonctionne le Chatbot : ${scrapedData.chatbot}
        //   - Optimisation du service avec BotGeneration.AI : ${scrapedData.service}
        //   - Informations de contact : ${scrapedData.contact}

        //   Veuillez générer un résumé concis pour chaque section sans HTML ni CSS :
        //   1. Comment fonctionne le chatbot
        //   2. Comment BotGeneration.AI optimise le service client
        //   3. Comment contacter l'équipe de service
        // `;
        const gptPrompt = `
        Voici les sections extraites du site web :
      
        - Comment fonctionne le Chatbot : ${scrapedData.chatbot}
        - Optimisation du service avec BotGeneration.AI : ${scrapedData.service}
        - Informations de contact : ${scrapedData.contact}
      
        Veuillez répondre directement à la question suivante basée sur la section demandée, sans mentionner le titre de la section ou la phrase "La section...":
        
            Instructions:
            1. Use the website content ${scrapedData} to provide accurate, relevant answers
            2. Write in a clear and concise manner without HTML or CSS
        "${input}"
      `;
      


          const gptResponse = await openai.chat.completions.create({
            model: 'gpt-4',
            messages: [
              { role: 'system', content: "You are a chatbot that summarizes and organizes website content" },
              { role: 'user', content: gptPrompt }
            ]
          });
          response.message = gptResponse.choices[0].message.content;
         
          console.log("[INFO] GPT response successfully generated.");
        } catch (error) {
          console.error("[ERROR] Failed to generate GPT response:", error.message);
          response.details = "Désolé, je n'ai pas pu générer une réponse pour le moment.";
        }
      } else {
        console.warn("[WARNING] No data scraped from the target URL.");
        response.details = "Désolé, je n'ai pas pu récupérer les détails du site Web.";
      }
    } else if (generalQuestionCount < 3) {
      // Handle general questions (limit to 4)
      console.log("[INFO] General question detected. Responding...");

      const gptPromptGeneral = `Answer this general question: "${input}" in a clear and concise manner.`;

      try {
        const gptResponseGeneral = await openai.chat.completions.create({
          model: 'gpt-4',
          messages: [
            { role: 'system', content: "You are a helpful assistant that answers general questions." },
            { role: 'user', content: gptPromptGeneral }
          ]
        });

        response.message = gptResponseGeneral.choices[0].message.content;
        generalQuestionCount++; // Increment the general question counter
        console.log("[INFO] General question response generated.");
      } catch (error) {
        console.error("[ERROR] Failed to generate general question response:", error.message);
        response.message = "Désolé, je n'ai pas pu générer une réponse pour votre question générale.";
      }
    } else {
      console.log("[INFO] Limit reached for general questions. No response will be given.");
      response.message = "Désolé, vous avez atteint la limite de 4 questions générales. Veuillez poser des questions spécifiques.";
    }

    // Log the response being sent
    console.log("[INFO] Response sent to the frontend:", response);

    // Return the response to the frontend
    res.json(response);
  }

}

module.exports = BotController;







// const { OpenAI } = require('openai'); // Import OpenAI SDK
// const puppeteer = require('puppeteer'); // Import Puppeteer for scraping dynamic content
// const dotenv = require('dotenv');

// // Load environment variables
// dotenv.config();

// // Set up OpenAI client
// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY, // Ensure your API key is in your .env file
// });

// // Base URL to scrape
// const TARGET_URL = "https://chatbot-ai-wine.vercel.app";

// // Scrape a given path on the target website
// async function scrapeWebsite(path = "") {
//   try {
//     const url = `${TARGET_URL}${path}`;
//     console.log(`[INFO] Starting to scrape URL: ${url}`);

//     const browser = await puppeteer.launch({
//       headless: true,
//       args: [
//         '--no-sandbox',
//         '--disable-setuid-sandbox',
//         '--disable-dev-shm-usage',
//         '--single-process',
//       ],
//     });
//     const page = await browser.newPage();
//     await page.goto(url, { waitUntil: 'networkidle2' });

//     // Extract all text content from the page
//     const content = await page.evaluate(() => document.body.innerText.trim());

//     await browser.close();
//     console.log(`[INFO] Scraping completed for URL: ${url}`);
//     return content;
//   } catch (error) {
//     console.error(`[ERROR] Failed to scrape URL (${path}): ${error.message}`);
//     return null;
//   }
// }

// let generalQuestionCount = 0;
// class BotController {
//   static async Botgenai(req, res) {
//     const { input } = req.body;

//     if (!input) {
//       console.warn("[WARNING] No input provided.");
//       return res.status(400).json({ message: 'Input is required.' });
//     }

//     console.log(`[INFO] Received input: ${input}`);
//     let response = {};

//     // Determine if scraping is needed
//     const needsScraping = input.toLowerCase().includes('chatbot') ||
//                           input.toLowerCase().includes('offres') ||
//                           input.toLowerCase().includes('ai') ||
//                           input.toLowerCase().includes('services') ||
//                           input.toLowerCase().includes('contact') ||
//                           input.toLowerCase().includes('comment ça marche') ||
//                           input.toLowerCase().includes('optimisez votre service client') ||
//                           input.toLowerCase().includes('CGU') ||
//                           input.toLowerCase().includes('Politique de confidentialité');


//     if (needsScraping) {
//       console.log("[INFO] Scraping content related to the query...");

//       const scrapedMain = await scrapeWebsite();
//       const scrapedOffres = await scrapeWebsite('/offres');

//       const combinedContent = [scrapedMain, scrapedOffres]
//         .filter(Boolean)
//         .join("\n\n");

//       if (combinedContent) {
//         try {
//           console.log("[INFO] Sending combined content to GPT...");
//           const gptPrompt = `
//           Voici le contenu extrait des pages principales et des offres du site web :

//           ${combinedContent}
// Veuillez répondre directement à la question suivante en formatant chaque point sur une nouvelle ligne. Organisez les informations avec des puces pour plus de lisibilité
// et donnez une réponse courte et professionnelle basée sur le contenu du site web.:
//           "${input}"
//           `;
     

// const gptResponse = await openai.chat.completions.create({
//   model: 'gpt-4',
//   messages: [
//     { role: 'system', content: "You are a chatbot that organizes and structures website content into clear, professional responses." },
//     { role: 'user', content: gptPrompt },
//   ],
// });

//           // const gptResponse = await openai.chat.completions.create({
//           //   model: 'gpt-4',
//           //   messages: [
//           //     { role: 'system', content: "You are a chatbot that provides concise answers based on website content." },
//           //     { role: 'user', content: gptPrompt },
//           //   ],
//           // });

//           response.message = gptResponse.choices[0].message.content;
//           console.log("[INFO] GPT response successfully generated.");
//         } catch (error) {
//           console.error("[ERROR] Failed to generate GPT response:", error.message);
//           response.message = "Désolé, je n'ai pas pu générer une réponse pour votre question.";
//         }
//       } else {
//         console.warn("[WARNING] No content scraped from the website.");
//         response.message = "Désolé, je n'ai pas pu récupérer les informations nécessaires.";
//       }
//     } else if (generalQuestionCount < 2) {
//       console.log("[INFO] General input detected. Responding directly...");
//       const gptPromptGeneral = `Answer this general question: "${input}" in a clear and concise manner.`;

//       try {
//         const gptResponse = await openai.chat.completions.create({
//           model: 'gpt-4',
//           messages: [
//             { role: 'system', content: "You are a helpful assistant that answers general questions." },
//             { role: 'user', content: gptPromptGeneral },
//           ],
//         });

//         response.message = gptResponse.choices[0].message.content;
//         generalQuestionCount++;
//         console.log("[INFO] General question response generated.");
//       } catch (error) {
//         console.error("[ERROR] Failed to generate general question response:", error.message);
//         response.message = "Désolé, je n'ai pas pu générer une réponse pour votre question.";
//       }
//     } else {
//             console.log("[INFO] Limit reached for general questions. No response will be given.");
//             response.message = "Je suis ici pour vous aider à en savoir plus sur LeadsGenerationAI. Faites-moi savoir si vous souhaitez de l'aide pour planifier une démo, découvrir notre produit ou vérifier notre contact ou remplir le formulaire !";
//         }
      

//     // Send the final response
//     console.log("[INFO] Response sent to the frontend:", response);
//     res.json(response);
//   }
// }

// module.exports = BotController;
