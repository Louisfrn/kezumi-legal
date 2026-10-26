import { cp, mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { content } from "../src/content.mjs";
import { site } from "../src/site.mjs";

const destination = resolve("_site");
const escape = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
const labels = {
  fr: {
    privacy: "Confidentialité",
    terms: "Conditions d’utilisation",
    support: "Assistance",
    home: "Accueil",
    toc: "Dans cette page",
    updated: "Mis à jour le 26 octobre 2026",
    skip: "Aller au contenu",
    lang: "Choose English",
    note: "À retenir",
    footer: "Apprendre avant de scroller.",
    contact: "Contacter l’éditeur",
  },
  en: {
    privacy: "Privacy",
    terms: "Terms of use",
    support: "Support",
    home: "Home",
    toc: "On this page",
    updated: "Updated October 26, 2026",
    skip: "Skip to content",
    lang: "Choisir le français",
    note: "At a glance",
    footer: "Think before you scroll.",
    contact: "Contact the publisher",
  },
};

for (const value of Object.values(site.publisher)) {
  if (!value || /placeholder|à renseigner|todo/i.test(value))
    throw new Error("Publisher information is incomplete.");
}

function render(language, page) {
  const copy = labels[language];
  const document = content[language][page];
  const path = `${language === "en" ? "en/" : ""}${page === "home" ? "" : `${page}/`}`;
  const depth = path.split("/").filter(Boolean).length;
  const root = depth ? "../".repeat(depth) : "./";
  const linkTo = (target, lang = language) =>
    `${root}${lang === "en" ? "en/" : ""}${target === "home" ? "" : `${target}/`}`;
  const otherLanguage = language === "fr" ? "en" : "fr";
  const canonical = `${site.url}${path}`;
  const alternate = `${site.url}${otherLanguage === "en" ? "en/" : ""}${page === "home" ? "" : `${page}/`}`;
  const isHome = page === "home";
  return `<!doctype html>
<html lang="${language}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="color-scheme" content="light">
  <meta name="theme-color" content="#FFF9F2">
  <meta name="description" content="${escape(document.intro)}">
  <meta name="referrer" content="strict-origin-when-cross-origin">
  <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'self'; img-src 'self'; font-src 'self'; base-uri 'none'; form-action 'none'; object-src 'none'">
  <title>${escape(isHome ? (language === "fr" ? "Informations légales" : "Legal information") : document.title)} · Kezumi</title>
  <link rel="canonical" href="${canonical}">
  <link rel="alternate" hreflang="${otherLanguage}" href="${alternate}">
  <link rel="icon" href="${root}assets/icon.png" type="image/png">
  <link rel="stylesheet" href="${root}styles.css">
</head>
<body>
  <a class="skip" href="#main">${copy.skip}</a>
  <div class="shell">
    <header class="site-header">
      <a class="wordmark" href="${linkTo("home")}" aria-label="Kezumi — ${copy.home}">kezumi<span aria-hidden="true">.</span></a>
      <a class="language" href="${linkTo(page, otherLanguage)}" lang="${otherLanguage}" hreflang="${otherLanguage}" aria-label="${copy.lang}">${otherLanguage === "fr" ? "Français" : "English"} <span aria-hidden="true">↗</span></a>
    </header>
    <nav class="main-nav" aria-label="${language === "fr" ? "Pages d’information" : "Information pages"}">
      ${["privacy", "terms", "support"].map((item) => `<a href="${linkTo(item)}"${page === item ? ' aria-current="page"' : ""}>${copy[item]}</a>`).join("\n      ")}
    </nav>
    <main id="main">
      ${
        isHome
          ? `
      <section class="home-hero">
        <div><p class="eyebrow">${escape(document.eyebrow)}</p><h1>${escape(document.title)}</h1><p class="lead">${escape(document.intro)}</p></div>
        <img class="hero-kezu" src="${root}assets/reading.webp" width="192" height="192" alt="">
      </section>
      <div class="cards">${["privacy", "terms", "support"].map((item, index) => `<a class="card card-${index}" href="${linkTo(item)}"><span class="card-number" aria-hidden="true">0${index + 1}</span><h2>${content[language][item].title}</h2><p>${escape(document[item])}</p><span class="card-arrow" aria-hidden="true">↗</span></a>`).join("")}</div>
      <section class="publisher"><h2>${language === "fr" ? "L’éditeur de Kezumi" : "Kezumi’s publisher"}</h2><address><strong>${escape(site.publisher.name)}</strong><br><a href="mailto:${escape(site.publisher.email)}">${escape(site.publisher.email)}</a></address></section>`
          : `
      <header class="document-header"><p class="eyebrow">Kezumi · ${language === "fr" ? "Informations légales" : "Legal information"}</p><h1>${escape(document.title)}</h1><p class="lead">${escape(document.intro)}</p><p class="updated"><time datetime="${site.updated}">${copy.updated}</time></p></header>
      <aside class="summary"><strong>${copy.note}</strong><p>${escape(document.summary)}</p></aside>
      <div class="document-layout"><nav class="toc" aria-label="${copy.toc}"><p>${copy.toc}</p><ol>${document.sections.map((section) => `<li><a href="#${section.id}">${escape(section.title.replace(/^\d+\. /, ""))}</a></li>`).join("")}</ol></nav><article class="document">${document.sections.map((section) => `<section id="${section.id}"><h2>${escape(section.title)}</h2>${section.html}</section>`).join("\n")}</article></div>`
      }
    </main>
    <footer class="site-footer"><p class="footer-wordmark">kezumi<span aria-hidden="true">.</span><small>${copy.footer}</small></p><div><a href="mailto:${escape(site.publisher.email)}">${copy.contact}</a><p>© ${site.updated.slice(0, 4)} ${escape(site.publisher.name)} · ${language === "fr" ? "Hébergé par GitHub Pages" : "Hosted on GitHub Pages"}</p></div></footer>
  </div>
</body>
</html>
`;
}

await mkdir(destination, { recursive: true });
await cp("assets", resolve(destination, "assets"), { recursive: true });
await cp("src/styles.css", resolve(destination, "styles.css"));
await writeFile(resolve(destination, ".nojekyll"), "");
const routes = [];
for (const language of ["fr", "en"]) {
  for (const page of ["home", "privacy", "terms", "support"]) {
    const route = `${language === "en" ? "en/" : ""}${page === "home" ? "" : `${page}/`}`;
    const folder = resolve(destination, route);
    await mkdir(folder, { recursive: true });
    await writeFile(resolve(folder, "index.html"), render(language, page));
    routes.push(`${site.url}${route}`);
  }
}
await writeFile(
  resolve(destination, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes.map((url) => `<url><loc>${url}</loc><lastmod>${site.updated}</lastmod></url>`).join("")}</urlset>\n`,
);
await writeFile(
  resolve(destination, "robots.txt"),
  `User-agent: *\nAllow: /\nSitemap: ${site.url}sitemap.xml\n`,
);
await writeFile(
  resolve(destination, "404.html"),
  render("fr", "home")
    .replaceAll('href="./', 'href="/kezumi-legal/')
    .replaceAll('src="./', 'src="/kezumi-legal/'),
);
console.log(`Built ${routes.length} pages in _site/.`);
