import axios from "axios";
// import * as cheerio from "cheerio";
// import * as fs from "fs";
import puppeteer from "puppeteer";

interface Article {
  title: string;
  link: string;
  text: string;
}

async function scrapeArticles() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://geekweek.interia.pl/");

  const articleLinks = await page.evaluate(() => {
    return Array.from(document.querySelectorAll("a.tile-magazine-thumb"))
      .slice(0, 5)
      .map((el) => (el as HTMLAnchorElement).href);
  });

  const articles: Article[] = [];

  for (const link of articleLinks) {
    await page.goto(link);

    const articleText = await page.evaluate(() => {
      const paragraphs = Array.from(
        document.querySelectorAll(".article-content p"),
      ) as HTMLParagraphElement[];

      return paragraphs.map((el) => el.innerText).join(" ");
    });

    articles.push({
      title: "temp title",
      link,
      text: articleText,
    });
  }

  await browser.close();

  return articles;
}

export default scrapeArticles;
