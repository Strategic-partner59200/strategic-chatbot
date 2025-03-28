const puppeteer = require('puppeteer');

async function scrapeWebsite(url) {
    try {
        console.log(`[INFO] Starting to scrape the website: ${url}`);
        
        // Launch headless browser
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();
        
        // Visit the website
        await page.goto(url, { waitUntil: 'networkidle2' });  // Wait for network to be idle (fully loaded)

        // Get the content after JavaScript has rendered
        const content = await page.evaluate(() => {
            // Here we get the inner HTML of the body or any other content
            const mainContent = document.querySelector('body').innerText;
            return mainContent ? mainContent.trim() : 'No content found';
        });

        console.log(`[INFO] Extracted content: ${content}`);
        
        await browser.close();
        
        return content || 'No content could be scraped from the website.';
    } catch (error) {
        console.error(`[ERROR] Failed to scrape the website: ${error.message}`);
        return 'An error occurred while scraping the website.';
    }
}

// Example usage
scrapeWebsite('https://chatbot-ai-wine.vercel.app/').then((data) => {
    console.log(`[RESULT] Scraped data:\n${data}`);
});
