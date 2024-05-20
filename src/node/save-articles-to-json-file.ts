import { Article } from "../types/Article";
import * as fs from "node:fs";
import * as path from "path";

export function saveArticlesToJsonFile(articles: Article[], filename: string) {
  const dirPath = path.join(__dirname, "../../data");
  const filePath = path.join(dirPath, filename);

  fs.mkdirSync(dirPath, { recursive: true });

  const jsonContent = JSON.stringify(articles, null, 2);
  fs.writeFileSync(filePath, jsonContent, "utf8");
}
