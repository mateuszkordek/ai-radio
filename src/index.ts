import scrapeArticles from "./node/scrape-articles";
import { Article } from "./types/Article";
import { saveArticlesToJsonFile } from "./node/save-articles-to-json-file";

(async () => {
  try {
    const articles = await scrapeArticles();

    if (!articles.length) {
      throw new Error("No articles found.");
    }

    const date = "temp date";
    saveArticlesToJsonFile(articles, date);
  } catch (err) {
    console.log(err);
  }
})();
