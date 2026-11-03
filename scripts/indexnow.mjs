// Tells IndexNow search engines (Bing, Yandex, Seznam, Naver) which pages changed.
// Google does not use IndexNow: it finds changes through the sitemap in Search Console.
//
//   node scripts/indexnow.mjs            URLs with a sitemap lastmod in the past 7 days
//   node scripts/indexnow.mjs --all      every URL in the sitemap
//   node scripts/indexnow.mjs --dry-run  print the URLs without submitting them
import { readFileSync } from "node:fs";

const HOST = "stacklyn.in";
const KEY = "119b4969ba564d0d462ae0286e9ef8f0";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const RECENT_DAYS = 7;

const args = process.argv.slice(2);
const cutoff = args.includes("--all") ? -Infinity : Date.now() - RECENT_DAYS * 86_400_000;

const sitemap = readFileSync(new URL("../public/sitemap.xml", import.meta.url), "utf8");
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>\s*<lastmod>([^<]+)<\/lastmod>/g)]
  .filter(([, , lastmod]) => new Date(lastmod).getTime() >= cutoff)
  .map(([, loc]) => loc);

if (urlList.length === 0) {
  console.log(`No sitemap URLs changed in the past ${RECENT_DAYS} days. Nothing to submit.`);
  process.exit(0);
}

if (args.includes("--dry-run")) {
  console.log(urlList.join("\n"));
  console.log(`\n${urlList.length} URLs would be submitted.`);
  process.exit(0);
}

// IndexNow rejects the whole request unless this file is live, so check before submitting.
const keyFile = await fetch(KEY_LOCATION);
if (!keyFile.ok || (await keyFile.text()).trim() !== KEY) {
  console.error(`Key file is not live at ${KEY_LOCATION}. Deploy the site first.`);
  process.exit(1);
}

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
});

if (!response.ok) {
  console.error(`IndexNow rejected the request: HTTP ${response.status} ${await response.text()}`);
  process.exit(1);
}
console.log(`Submitted ${urlList.length} URLs to IndexNow (HTTP ${response.status}).`);
