# Game Scraper

Game Scraper is a command-line interface (CLI) tool that uses web scraping to fetch game data from Metacritic. It allows you to retrieve information such as the title, genre, Metacritic score, co-op availability, and hours to complete for a given game.

## Installation

1. Make sure you have Node.js installed on your system. You can download it from the official website: [Node.js](https://nodejs.org)

2. Clone or download this repository.

3. Open a terminal or command prompt and navigate to the project directory.

4. Run the following command to install the required dependencies:

```bash
npm install
```

## Usage

To use the Game Scraper, follow these steps:

1. Open a terminal or command prompt and navigate to the project directory.

2. Run the following command:

```bash
node . "Game Title"
```

Replace `"Game Title"` with the title of the game you want to search for.

Example:

```bash
node . "Mafia 3"
```

1. The tool will scrape the data from Metacritic and display a single row of the table with the relevant information for the specified game title.

Example output:

```bash
| Mafia: Definitive Edition | 78 | null | ❌ |
```

If the game is not found, it will display the message "Game not found."

## Notes

- This tool uses Puppeteer, a Node.js library for controlling a headless Chrome browser, to perform web scraping. It launches a browser instance and navigates to the Metacritic website to fetch the game data.

- Please note that web scraping may be subject to the terms of service and legal restrictions of the target website. Make sure to review and comply with the website's policies and restrictions when using this tool.

- The tool is currently designed to work with the Metacritic website. You can modify the code and selectors to scrape data from other websites as well.

## License

This project is licensed under the [MIT License](LICENSE).

### Author
Bartłomiej Mikołajczuk - [GitHub](github.com/beardless) - [Twitter](twitter.com/beardless_dev](https://twitter.com/beardlesSole47))