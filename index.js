const puppeteer = require("puppeteer-core");

const fetchGameData = async (gameTitle) => {
  // Launch a headless Chrome browser
  const browser = await puppeteer.launch({
    executablePath:
      "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  });
  const page = await browser.newPage();

  // Generate the search URL
  const searchUrl = `https://www.metacritic.com/search/all/${encodeURIComponent(
    gameTitle
  )}/results`;

  // Navigate to the search URL
  await page.goto(searchUrl);

  // Wait for the search results to load
  await page.waitForSelector("div.module.search_results");

  // Extract the game data
  const rowData = await page.evaluate(() => {
    const row = document.querySelector("li.result.first_result");

    if (row) {
      const title = row.querySelector(".product_title").textContent.trim();
      const metaScore = row
        .querySelector("span.metascore_w")
        .textContent.trim();

      return [title, metaScore];
    }

    return null;
  });

  // Close the browser
  await browser.close();

  return rowData;
};

// Get the game title from the command line argument
const gameTitle = process.argv[2];

if (gameTitle) {
  // Fetch and print the game data
  fetchGameData(gameTitle)
    .then((rowData) => {
      if (rowData) {
        const table = `| ${rowData[0]} | ${rowData[1]} | null | ❌ |`;
        console.log(table);
      } else {
        console.log("Game not found.");
      }
    })
    .catch((err) => console.error("Error:", err));
} else {
  console.log("Please provide a game title as a command-line argument.");
}
