import scrapeArticles from "./node/scrape-articles";

console.log("start");

(async () => {
  try {
    const articles = await scrapeArticles();
    console.log(articles);
  } catch (err) {
    console.log(err);
  }
})();
