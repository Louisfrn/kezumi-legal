import assert from "node:assert/strict";
import { readFile, readdir, stat } from "node:fs/promises";
import { dirname, resolve, sep } from "node:path";
import { site } from "../src/site.mjs";

const root = resolve("_site");
let documents = 0;
async function inspect(folder) {
  for (const item of await readdir(folder, { withFileTypes: true })) {
    const path = resolve(folder, item.name);
    if (item.isDirectory()) {
      await inspect(path);
      continue;
    }
    if (!item.name.endsWith(".html")) continue;
    const html = await readFile(path, "utf8");
    documents++;
    assert.match(html, /<html lang="(?:fr|en)">/);
    assert.equal(
      (html.match(/<h1(?:\s|>)/g) ?? []).length,
      1,
      `${path}: one main heading`,
    );
    assert.match(html, /name="viewport"/);
    assert.match(html, /href="#main"/);
    assert.ok(html.includes(site.publisher.name));
    assert.doesNotMatch(html, /Louis Fournier|Robespierre|94200|Ivry-sur-Seine|undefined/);
    assert.doesNotMatch(
      html,
      /TODO|placeholder|à renseigner/i,
    );
    assert.doesNotMatch(
      html,
      /<script\b|<iframe\b|<form\b|https?:\/\/fonts\./i,
    );
    const ids = new Set(
      [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]),
    );
    for (const match of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
      const link = match[1];
      if (link.startsWith("mailto:")) continue;
      if (/^https:\/\//.test(link)) {
        new URL(link);
        continue;
      }
      assert.ok(
        !/^(?:http:|javascript:|data:)/i.test(link),
        `${path}: unsafe link`,
      );
      const [location, hash] = link.split("#");
      if (!location) {
        assert.ok(ids.has(hash), `${path}: missing anchor ${hash}`);
        continue;
      }
      const local = location.startsWith("/kezumi-legal/")
        ? location.slice("/kezumi-legal/".length)
        : null;
      let target =
        local !== null
          ? resolve(root, local)
          : resolve(dirname(path), location);
      assert.ok(
        target === root || target.startsWith(root + sep),
        `${path}: link leaves site`,
      );
      if ((await stat(target)).isDirectory())
        target = resolve(target, "index.html");
      assert.ok((await stat(target)).isFile(), `${path}: missing ${link}`);
    }
  }
}
await inspect(root);
assert.equal(documents, 9, "Eight FR/EN pages and a 404 page");
const privacy = await readFile(resolve(root, "privacy/index.html"), "utf8");
const terms = await readFile(resolve(root, "terms/index.html"), "utf8");
for (const word of [
  "Supabase",
  "RevenueCat",
  "Screen Time",
  "effacement",
  "CNIL",
])
  assert.ok(privacy.includes(word), word);
for (const word of ["3,99", "19,99", "Réglages", "reportaproblem.apple.com"])
  assert.ok(terms.includes(word), word);
assert.match(site.publisher.email, /^[^@\s]+@[^@\s]+\.[^@\s]+$/);
console.log(
  `Verified ${documents} HTML documents: local links, languages, headings, publisher privacy, key disclosures and no third-party scripts.`,
);
