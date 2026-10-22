#!/usr/bin/env node
/**
 * build.js — hey.nous website generator (v2)
 *
 * 1. Scans content/<locale>/ markdown files (extended frontmatter, see IMPLEMENTATION_PLAN.md)
 * 2. Renders templates/* into fully static HTML under <repo-root>/
 * 3. Generates per-locale search indexes, sitemap.xml (when SITE_URL is set)
 * 4. Copies static assets (styles.css, assets/, _redirects, _headers)
 *
 * Routes (EN is the default locale):
 *   /                    -> 302 to /en/         /id/                 home (ID)
 *   /en/                 home (EN)              /id/berita/          archive (ID)
 *   /en/news/            archive                /id/explainer/       archive (ID)
 *   /en/explainers/      archive                /id/tools/           archive (ID)
 *   /en/tools/           archive                /id/artikel/<slug>/  article (ID)
 *   /en/articles/<s>/    article (EN)           /id/about/           about (ID)
 *   /en/works/           works showcase (EN)    /id/karya/           works showcase (ID)
 *   /en/about/           about (EN)             /id/search/          search (ID)
 *   /en/search/          search (EN)
 *
 * Only status=published stories are emitted. The locale switcher links to a
 * counterpart only when one exists (EN translations need translationStatus=reviewed).
 */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { marked } = require('marked');

const ROOT = __dirname;
const SITE_URL = (process.env.SITE_URL || 'https://nous.my.id').replace(/\/$/, ''); // canonical domain; override via env if needed
const GA_ID = process.env.GA_ID || ''; // GA4 measurement ID (G-XXXXXXXXXX); empty = no tracking snippet

const MONTHS = {
  id: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'],
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
};
const FORMAT_LABEL = {
  id: { news: 'Berita', explainer: 'Explainer', tools: 'Tools', research: 'Riset', industry: 'Industri' },
  en: { news: 'News', explainer: 'Explainers', tools: 'Tools', research: 'Research', industry: 'Industry' },
};
// format -> archive section (ID)
const FORMAT_SECTION = { news: 'berita', research: 'berita', industry: 'berita', explainer: 'explainer', tools: 'tools' };
// format -> archive section (EN)
const EN_FORMAT_SECTION = { news: 'news', research: 'news', industry: 'news', explainer: 'explainers', tools: 'tools' };
// archive section -> counterpart section in the other locale
const SECTION_COUNTERPART = { berita: 'news', explainer: 'explainers', tools: 'tools', news: 'berita', explainers: 'explainer' };

const T = {
  id: {
    skip: 'Lewati ke konten utama', nav_label: 'Navigasi utama', home: 'Beranda',
    search: 'Cari', menu: 'Menu', tagline: 'Publikasi AI berbahasa Indonesia. Tetap penasaran, tetap terdepan.',
    footer_note: 'Pratinjau desain. Publikasi butuh persetujuan eksplisit.',
    kicker: 'Publikasi AI berbahasa Indonesia',
    hero_h1a: 'Teknologi berubah.', hero_h1b: 'Kamu tetap paham.',
    hero_lede: 'Berita AI, penjelasan jernih, dan tools yang berguna. Untuk pekerja tech, kreator, pelajar, dan kamu yang penasaran.',
    cta_news: 'Jelajahi berita', cta_about: 'Kenalan dengan Nous',
    nous_alt: 'Nous, maskot red panda hey.nous berhoodie navy',
    nous_caption: 'Nous • maskot hey.nous', nous_caption2: 'Tetap penasaran.',
    editors: 'Pilihan editor', latest: 'Terbaru', topics: 'Jelajahi topik',
    about_panel: 'Tentang hey.nous', about_h: 'Kenalan dengan hey.nous.',
    about_p: 'Kami membuat perkembangan AI mudah dipahami dan berguna untuk pembaca Indonesia. Berita dulu, kredibilitas dulu.',
    filter_label: 'Filter', no_results_h: 'Belum ada hasil untuk filter ini.',
    no_results_p: 'Coba kata lain atau hapus filter.',
    related: 'Cerita terkait', sources_h: 'Sumber utama', takeaways_h: 'Poin penting',
    min_read: 'menit baca', updated: 'Diperbarui',
    share: 'Bagikan artikel ini', copy_link: 'Salin tautan', copied: 'Tersalin!',
    comments: 'Komentar',
    search_h: 'Cari', search_label: 'Kata kunci', search_ph: 'Cari berita, topik, atau tools…',
    count_one: '{n} hasil', count_many: '{n} hasil', search_error: 'Indeks pencarian tidak dapat dimuat.',
    about_chip: 'Tentang', what_h: 'Apa itu hey.nous', audience_h: 'Untuk siapa',
    principles_h: 'Prinsip kami', how_h: 'Cara kami bekerja',
    how_p: 'Halaman publik hanya memuat konten berstatus terbit. Tidak ada jadwal newsletter, penghargaan, atau sejarah yang dikarang.',
    follow_h: 'Ikuti hey.nous',
    closing_h: 'Tetap penasaran. Tetap terdepan.', closing_p: 'Stay curious. Stay ahead.',
    nous_about_caption: 'Ini Nous, maskot red panda kami.',
    f404_p: 'Halaman yang kamu cari tidak ada atau sudah dipindah.',
    f404_cta: 'Kembali ke beranda', date_locale: 'id-ID',
    no_translation: 'Terjemahan bahasa Inggris belum tersedia untuk halaman ini.',
    archive_berita_t: 'Berita AI', archive_berita_d: 'Kabar harian AI, riset, dan industri. Bahasa Indonesia, diverifikasi ke sumber primer.',
    archive_berita_st: 'Berita AI terbaru: kabar, riset, dan industri | hey.nous',
    archive_explainer_t: 'Explainer', archive_explainer_d: 'Penjelasan mekanisme AI tanpa jargon. Untuk kamu yang ingin paham, bukan sekadar tahu.',
    archive_explainer_st: 'Explainer AI tanpa jargon: pahami cara kerjanya | hey.nous',
    archive_tools_t: 'Tools', archive_tools_d: 'Update produk dan panduan tools AI: kapan berguna, kapan tidak.',
    archive_tools_st: 'Panduan tools AI: kapan berguna, kapan tidak | hey.nous',
    all: 'Semua',
    karya: 'Karya', karya_p: 'Tool gratis yang kami buat dan pakai sendiri. Fokus, jelas gunanya, tanpa akun.',
    karya_cta: 'Lihat semua karya',
    ticker_html: 'Tetap penasaran <span class="sep">✦</span> Tetap terdepan <span class="sep">✦</span> AI, dijelaskan <span class="sep">✦</span> Kabar terverifikasi <span class="sep">✦</span>',
    flip_hint: 'Arahkan kursor ke Nous — ada kejutan',
    theme_toggle: 'Alihkan mode gelap',
    karya_chip: 'Karya',
    karya_closing_h: 'Dibuat untuk dipakai, bukan dipajang.',
    karya_closing_p: 'Semua tool di atas gratis dan open-source. Kalau ada yang rusak atau kamu punya ide tool berikutnya, sapa kami di Instagram.',
    stock_h: 'Aset stok',
    stock_p: 'Selain tool, kami juga membuat ilustrasi stok AI: koleksi visual siap pakai untuk presentasi, artikel, dan proyek kreatif. Lihat dan lisensikan di portofolio Dreamstime kami.',
    stock_cta: 'Lihat portofolio Dreamstime',
  },
  en: {
    skip: 'Skip to main content', nav_label: 'Main navigation', home: 'Home',
    search: 'Search', menu: 'Menu', tagline: 'An AI publication in English. Stay curious. Stay ahead.',
    footer_note: 'Independent AI publication.',
    kicker: 'AI publication in English',
    hero_h1a: 'Technology changes.', hero_h1b: 'You stay in the loop.',
    hero_lede: 'AI news, clear explainers, and useful tools. For tech workers, creators, students, and the curious.',
    cta_news: 'Browse news', cta_about: 'Meet Nous',
    nous_alt: 'Nous, the hey.nous red panda mascot in a navy hoodie',
    nous_caption: 'Nous • hey.nous mascot', nous_caption2: 'Stay curious.',
    editors: "Editor's picks", latest: 'Latest', topics: 'Browse topics',
    about_panel: 'About hey.nous', about_h: 'Meet hey.nous.',
    about_p: 'We make AI developments easy to understand and useful. News first, credibility first.',
    filter_label: 'Filters', no_results_h: 'Nothing matches these filters.',
    no_results_p: 'Try different keywords or clear the filters.',
    related: 'Related stories', sources_h: 'Primary sources', takeaways_h: 'Key takeaways',
    min_read: 'min read', updated: 'Updated',
    share: 'Share this article', copy_link: 'Copy link', copied: 'Copied!',
    comments: 'Comments',
    search_h: 'Search', search_label: 'Keywords', search_ph: 'Search news, topics, or tools…',
    count_one: '{n} result', count_many: '{n} results', search_error: 'The search index could not be loaded.',
    karya: 'Works', karya_p: 'Free tools we built and use ourselves. Focused, obvious, no account needed.',
    karya_cta: 'See all works',
    ticker_html: 'Stay curious <span class="sep">✦</span> Stay ahead <span class="sep">✦</span> AI, explained <span class="sep">✦</span> Verified news <span class="sep">✦</span>',
    flip_hint: 'Hover over Nous — there is a surprise',
    theme_toggle: 'Toggle dark mode',
    karya_chip: 'Works',
    karya_closing_h: 'Built to be used, not displayed.',
    karya_closing_p: 'Everything above is free and open-source. If something breaks or you have an idea for the next tool, say hi on Instagram.',
    stock_h: 'Stock assets',
    stock_p: 'Beyond tools, we also create AI stock illustrations: ready-to-use visuals for presentations, articles, and creative projects. Browse and license them on our Dreamstime portfolio.',
    stock_cta: 'View Dreamstime portfolio',
    open_tool: 'Open tool',
    about_chip: 'About', what_h: 'What is hey.nous', audience_h: 'Who it is for',
    principles_h: 'Our principles', how_h: 'How we work',
    how_p: 'Public pages only carry published content. No newsletter schedule, awards, or invented history.',
    follow_h: 'Follow hey.nous',
    closing_h: 'Stay curious. Stay ahead.', closing_p: 'Tetap penasaran. Tetap terdepan.',
    nous_about_caption: 'This is Nous, our red panda mascot.',
    f404_p: 'The page you are looking for does not exist or was moved.',
    f404_cta: 'Back to home', date_locale: 'en-US',
    no_translation: 'This page is not available in the other language yet.',
    archive_news_t: 'AI News', archive_news_d: 'Daily AI news, research, and industry. Verified against primary sources.',
    archive_news_st: 'AI news: daily updates on research and industry | hey.nous',
    archive_explainers_t: 'Explainers', archive_explainers_d: 'How AI works, without the jargon. For those who want to understand, not just know.',
    archive_explainers_st: 'AI explainers: how AI works, without the jargon | hey.nous',
    archive_tools_t: 'Tools', archive_tools_d: 'Product updates and AI tool guides: when they help, when they do not.',
    archive_tools_st: 'AI tool guides: when they help, and when not | hey.nous',
    all: 'All',
  },
};

// ---------- frontmatter (small YAML subset) ----------
function parseFrontmatter(raw) {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!m) return { meta: {}, body: raw };
  const lines = m[1].split('\n');
  const meta = {};
  let i = 0;
  const unquote = (s) => s.replace(/^["']|["']$/g, '');
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim() || line.trim().startsWith('#')) { i++; continue; }
    const kv = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (!kv) { i++; continue; }
    const key = kv[1], rest = kv[2].trim();
    if (rest !== '') {
      if (rest.startsWith('[') && rest.endsWith(']')) {
        meta[key] = rest.slice(1, -1).split(',').map((s) => unquote(s.trim())).filter(Boolean);
      } else {
        meta[key] = rest === 'true' ? true : rest === 'false' ? false : unquote(rest);
      }
      i++; continue;
    }
    // block: list or nested object
    const items = [];
    const obj = {};
    let isList = null, j = i + 1;
    while (j < lines.length && /^\s+/.test(lines[j]) && lines[j].trim() !== '') {
      const l = lines[j];
      if (/^\s*-\s/.test(l)) {
        isList = true;
        const after = l.replace(/^\s*-\s*/, '');
        const kvm = after.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
        if (kvm && after.includes(':')) {
          const o = { [kvm[1]]: unquote(kvm[2].trim()) };
          j++;
          while (j < lines.length && /^\s{4,}\S/.test(lines[j])) {
            const k2 = lines[j].match(/^\s+([A-Za-z0-9_]+):\s*(.*)$/);
            if (k2) o[k2[1]] = unquote(k2[2].trim());
            j++;
          }
          items.push(o);
        } else { items.push(unquote(after)); j++; }
      } else {
        isList = false;
        const kvm = l.match(/^\s+([A-Za-z0-9_]+):\s*(.*)$/);
        if (kvm) obj[kvm[1]] = unquote(kvm[2].trim());
        j++;
      }
    }
    meta[key] = isList ? items : obj;
    i = j;
  }
  return { meta, body: m[2] };
}

// ---------- helpers ----------
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
// Wrap markdown tables in a horizontal-scroll container so wide tables stay usable on mobile.
function wrapTables(html) {
  return html.split('<table>').join('<div class="table-scroll"><table>').split('</table>').join('</table></div>');
}
function fmtDate(iso, locale) {
  const d = new Date(iso + 'T00:00:00');
  if (isNaN(d)) return iso;
  return `${d.getDate()} ${MONTHS[locale][d.getMonth()]} ${d.getFullYear()}`;
}
function tpl(name, vars) {
  let s = fs.readFileSync(path.join(ROOT, 'templates', name), 'utf8');
  for (const [k, v] of Object.entries(vars)) s = s.split(`{{${k}}}`).join(v ?? '');
  return s;
}
function writeFile(rel, content) {
  const p = path.join(ROOT, rel);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, content, 'utf8');
}
function storyUrl(st) {
  if (st.layout === 'about') return st.locale === 'id' ? '/id/about/' : '/en/about/';
  if (st.layout === 'karya') return st.locale === 'id' ? '/id/karya/' : '/en/works/';
  return st.locale === 'id' ? `/id/artikel/${st.slug}/` : `/en/articles/${st.slug}/`;
}
function counterpart(story, all) {
  if (story.counterpartUrl) return { url: story.counterpartUrl };
  if (!story.translationGroupId) return null;
  const other = story.locale === 'id' ? 'en' : 'id';
  return all.find((s) => s.translationGroupId === story.translationGroupId && s.locale === other &&
    s.status === 'published' && (other === 'id' || s.translationStatus === 'reviewed')) || null;
}
function baseVars(story, all, active) {
  const locale = story.locale;
  const t = T[locale];
  const navItems = locale === 'id'
    ? [['Beranda', '/id/'], ['Berita', '/id/berita/'], ['Explainer', '/id/explainer/'], ['Tools', '/id/tools/'], ['Karya', '/id/karya/'], ['Tentang', '/id/about/']]
    : [['Home', '/en/'], ['News', '/en/news/'], ['Explainers', '/en/explainers/'], ['Tools', '/en/tools/'], ['Works', '/en/works/'], ['About', '/en/about/']];
  const nav_links = navItems.map(([label, href]) =>
    `<a href="${href}"${active === href ? ' aria-current="page"' : ''}>${esc(label)}</a>`).join('\n      ');
  const cp = counterpart(story, all);
  const other = locale === 'id' ? 'en' : 'id';
  const locale_switch = cp
    ? `<a href="${cp.url}" aria-current="false">${other.toUpperCase()}</a><a href="${story.url}" aria-current="true">${locale.toUpperCase()}</a>`
    : `<a href="${story.url}" aria-current="true">${locale.toUpperCase()}</a><span class="disabled" title="${esc(t.no_translation)}">${other.toUpperCase()}</span>`;
  const meta = story.meta;
  const seoTitle = esc(meta.seo?.title || `${meta.title} | hey.nous`);
  const seoDesc = esc(meta.seo?.description || meta.dek || '');
  const canonicalUrl = SITE_URL + story.url;
  // hreflang: self + counterpart + x-default (EN is the default locale)
  const hreflangTags = [`<link rel="alternate" hreflang="${locale}" href="${canonicalUrl}">`];
  if (cp) hreflangTags.push(`<link rel="alternate" hreflang="${other}" href="${SITE_URL}${cp.url}">`);
  hreflangTags.push(`<link rel="alternate" hreflang="x-default" href="${SITE_URL}/en/">`);
  // social images: article cover when present, else the Nous artwork
  const ogImgUrl = story.meta.cover?.src ? SITE_URL + story.meta.cover.src : SITE_URL + '/assets/nous-master.jpg';
  const isArticle = story.layout === 'article';
  const ogTags = [
    `<meta property="og:image" content="${ogImgUrl}">`,
    `<meta property="og:site_name" content="hey.nous">`,
    `<meta property="og:locale" content="${locale === 'id' ? 'id_ID' : 'en_US'}">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${seoTitle}">`,
    `<meta name="twitter:description" content="${seoDesc}">`,
    `<meta name="twitter:image" content="${ogImgUrl}">`,
  ];
  if (isArticle) {
    ogTags.push(`<meta property="article:published_time" content="${story.publishedAt}">`);
    ogTags.push(`<meta property="article:modified_time" content="${story.updatedAt}">`);
    ogTags.push(`<meta property="article:author" content="hey.nous">`);
  }
  // JSON-LD structured data
  const jsonLd = jsonLdFor(story, canonicalUrl, ogImgUrl, seoTitle, seoDesc);
  // Google Analytics (only when GA_ID is configured)
  const gaTags = GA_ID
    ? `<script async src="https://www.googletagmanager.com/gtag/js?id=${GA_ID}"></script>\n<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');</script>`
    : '';
  return {
    lang: locale, t_skip: t.skip, t_nav_label: t.nav_label, t_home: t.home,
    t_theme_toggle: t.theme_toggle,
    css_v: crypto.createHash('md5').update(fs.readFileSync(path.join(ROOT, 'styles.css'))).digest('hex').slice(0, 8),
    feed_link: `<link rel="alternate" type="application/rss+xml" title="hey.nous RSS (${locale.toUpperCase()})" href="/${locale}/feed.xml">`,
    t_search: t.search, t_menu: t.menu, t_tagline: t.tagline, t_footer_note: t.footer_note,
    t_ticker: t.ticker_html,
    home_url: locale === 'id' ? '/id/' : '/en/',
    search_link: `<a class="search-link" href="/${locale}/search/">${t.search}</a>`,
    nav_links, locale_switch,
    seo_title: seoTitle, seo_description: seoDesc,
    canonical_url: canonicalUrl,
    canonical_tag: `<link rel="canonical" href="${canonicalUrl}">`,
    hreflang_tags: hreflangTags.join('\n'),
    og_type: isArticle ? 'article' : 'website',
    og_tags: ogTags.join('\n'),
    json_ld: jsonLd,
    ga_tags: gaTags,
  };
}
// JSON-LD: NewsArticle for articles, WebSite+Organization for locale homes,
// CollectionPage/AboutPage/SearchResultsPage for the rest (not 404)
function jsonLdFor(story, canonicalUrl, ogImgUrl, seoTitle, seoDesc) {
  const clean = (s) => String(s).replace(/</g, '');
  const org = { '@type': 'Organization', name: 'hey.nous', url: SITE_URL + '/' };
  const base = { '@context': 'https://schema.org', url: canonicalUrl, inLanguage: story.locale, name: clean(story.meta.title) };
  let data = null;
  if (story.url === '/404.html') {
    data = null;
  } else if (story.layout === 'article') {
    data = {
      '@context': 'https://schema.org', '@type': 'NewsArticle',
      headline: clean(story.meta.title), description: clean(seoDesc),
      image: [ogImgUrl], datePublished: story.publishedAt, dateModified: story.updatedAt,
      inLanguage: story.locale, author: org,
      publisher: { ...org, logo: { '@type': 'ImageObject', url: SITE_URL + '/assets/nous-master.jpg' } },
      mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl },
    };
  } else if (/^\/(id|en)\/$/.test(story.url)) {
    data = [
      { '@context': 'https://schema.org', '@type': 'WebSite', name: 'hey.nous', url: SITE_URL + '/', inLanguage: story.locale },
      { '@context': 'https://schema.org', ...org },
    ];
  } else if (story.layout === 'about') {
    data = { ...base, '@type': 'AboutPage', description: clean(seoDesc) };
  } else if (/\/search\//.test(story.url)) {
    data = { ...base, '@type': 'SearchResultsPage', description: clean(seoDesc) };
  } else {
    data = { ...base, '@type': 'CollectionPage', description: clean(seoDesc) };
  }
  return data ? `<script type="application/ld+json">${JSON.stringify(data)}</script>` : '';
}
function cardHtml(st) {
  const t = T[st.locale];
  const chips = [`<span class="chip">${esc(FORMAT_LABEL[st.locale][st.format] || st.format)}</span>`];
  if (st.sample) chips.push(`<span class="chip chip-sample">Contoh</span>`);
  const illus = st.meta.cover?.src
    ? `<div class="card-illus"><img src="${esc(st.meta.cover.src)}" alt="${esc(st.meta.cover.alt || st.meta.title)}" width="640" height="360" loading="lazy" style="width:100%;height:100%;object-fit:cover;display:block"></div>`
    : `<div class="card-illus" aria-hidden="true">ILUSTRASI</div>`;
  return `<a class="card" href="${st.url}" data-format="${esc(st.format)}" data-topics="${esc((st.topics || []).join(','))}">
    ${illus}
    <div class="card-body">
      <div class="card-chips">${chips.join('')}</div>
      <h3 class="card-title">${esc(st.meta.title)}</h3>
      <p class="card-meta">${esc(fmtDate(st.publishedAt, st.locale))} • ${st.readingMinutes} ${t.min_read}</p>
    </div>
  </a>`;
}
function resolveWikiLinks(md, all, locale) {
  return md.replace(/\[\[([^\]]+)\]\]/g, (_, inner) => {
    const [slugPart, labelPart] = inner.split('|').map((s) => s.trim());
    const target = all.find((s) => s.slug === slugPart && s.locale === locale);
    if (!target) return `<span style="text-decoration:line-through;color:var(--muted)" title="Not found: ${esc(slugPart)}">${esc(labelPart || slugPart)}</span>`;
    return `[${labelPart || target.meta.title}](${target.url})`;
  });
}

// ---------- load content ----------
function loadStories() {
  const stories = [];
  for (const locale of ['id', 'en']) {
    const dir = path.join(ROOT, 'content', locale);
    if (!fs.existsSync(dir)) continue;
    const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => {
      const p = path.join(d, e.name);
      return e.isDirectory() ? walk(p) : e.name.endsWith('.md') ? [p] : [];
    });
    for (const file of walk(dir)) {
      const raw = fs.readFileSync(file, 'utf8');
      const { meta, body } = parseFrontmatter(raw);
      const slug = meta.slug || path.basename(file, '.md');
      const st = {
        locale, slug, meta, body,
        layout: meta.layout || 'article',
        format: (meta.format || 'news').toLowerCase(),
        topics: meta.topics || [],
        publishedAt: meta.publishedAt || '1970-01-01',
        updatedAt: meta.updatedAt || meta.publishedAt || '1970-01-01',
        readingMinutes: meta.readingMinutes || 4,
        sample: !!meta.sample,
        status: meta.status || 'draft',
        translationGroupId: meta.translationGroupId || null,
        translationStatus: meta.translationStatus || 'original',
      };
      st.url = storyUrl(st);
      if (st.status === 'published') stories.push(st);
    }
  }
  stories.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
  return stories;
}

// ---------- page builders ----------
function articlePage(st, all) {
  const t = T[st.locale];
  const bodyHtml = wrapTables(marked.parse(resolveWikiLinks(st.body, all, st.locale)));
  const takeaways = (st.meta.keyTakeaways || []).map((k) => `<li>${esc(k)}</li>`).join('');
  const takeaways_block = takeaways
    ? `<div class="takeaways"><h2>${t.takeaways_h}</h2><ul>${takeaways}</ul></div>` : '';
  const sources = (st.meta.primarySources || []).map((s) =>
    `<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.title)} ↗</a></li>`).join('');
  const sources_block = sources
    ? `<h2>${t.sources_h}</h2><ul class="sources">${sources}</ul>` : '';
  const hero_block = st.meta.cover?.src
    ? `<figure><div class="hero-illus"><img src="${esc(st.meta.cover.src)}" alt="${esc(st.meta.cover.alt || '')}" width="${st.meta.cover.width || 1200}" height="${st.meta.cover.height || 600}"></div>
       <figcaption class="caption">${esc(st.meta.cover.caption || '')} ${st.meta.cover.credit ? `${st.locale === 'id' ? 'Kredit' : 'Credit'}: ${esc(st.meta.cover.credit)}.` : ''}</figcaption></figure>`
    : `<figure><div class="hero-illus" role="img" aria-label="Ilustrasi editorial">ILUSTRASI</div>
       <figcaption class="caption">${st.locale === 'id' ? 'Ilustrasi editorial.' : 'Editorial illustration.'} ${st.locale === 'id' ? 'Kredit' : 'Credit'}: Hey Nous.</figcaption></figure>`;
  let related = (st.meta.relatedSlugs || [])
    .map((s) => all.find((x) => x.slug === s && x.locale === st.locale && x.layout === 'article'))
    .filter(Boolean);
  if (related.length < 3) {
    const extra = all.filter((x) => x !== st && x.locale === st.locale && x.layout === 'article' &&
      !related.includes(x) && x.format === st.format).slice(0, 3 - related.length);
    related = related.concat(extra);
  }
  const sectionPath = st.locale === 'id' ? `/id/${FORMAT_SECTION[st.format] || 'berita'}/` : `/en/${EN_FORMAT_SECTION[st.format] || 'news'}/`;
  const absUrl = SITE_URL + st.url;
  const share_block = `<div class="share-row" aria-label="${esc(t.share)}">
    <span class="share-label">${esc(t.share)}</span>
    <div class="share-btns">
      <a class="share-btn" href="https://twitter.com/intent/tweet?text=${encodeURIComponent(st.meta.title)}&url=${encodeURIComponent(absUrl)}" target="_blank" rel="noopener"><span class="sdot" style="background:var(--ink)"></span>X</a>
      <a class="share-btn" href="https://wa.me/?text=${encodeURIComponent(st.meta.title + ' ' + absUrl)}" target="_blank" rel="noopener"><span class="sdot" style="background:#25D366"></span>WhatsApp</a>
      <a class="share-btn" href="https://t.me/share/url?url=${encodeURIComponent(absUrl)}&text=${encodeURIComponent(st.meta.title)}" target="_blank" rel="noopener"><span class="sdot" style="background:#229ED9"></span>Telegram</a>
      <button class="share-btn" id="copyLink" type="button" data-url="${esc(absUrl)}" data-copied="${esc(t.copied)}"><span class="sdot" style="background:var(--accent)"></span>${esc(t.copy_link)}</button>
    </div>
  </div>
  <script>
  (function () {
    var b = document.getElementById('copyLink');
    if (!b) return;
    b.addEventListener('click', function () {
      var url = b.getAttribute('data-url');
      var label = b.innerHTML;
      function done() {
        b.innerHTML = b.getAttribute('data-copied');
        setTimeout(function () { b.innerHTML = label; }, 2000);
      }
      function fallback() {
        var i = document.createElement('input');
        i.value = url; document.body.appendChild(i); i.select();
        try { document.execCommand('copy'); done(); } catch (e) {}
        document.body.removeChild(i);
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(done).catch(fallback);
      } else { fallback(); }
    });
  })();
  </script>`;
 const content = tpl('article.html', {
    home_url: st.locale === 'id' ? '/id/' : '/en/', t_home: t.home,
    section_label: st.locale === 'id' ? FORMAT_LABEL.id[st.format] : FORMAT_LABEL.en[st.format],
    format_chip: `<span class="chip">${esc(st.locale === 'id' ? FORMAT_LABEL.id[st.format] : FORMAT_LABEL.en[st.format])}</span>`,
    sample_chip: st.sample ? ` <span class="chip chip-sample">Konten contoh</span>` : '',
    title: esc(st.meta.title), dek: esc(st.meta.dek || ''),
    date_line: `<time datetime="${st.publishedAt}">${fmtDate(st.publishedAt, st.locale)}</time>${st.updatedAt !== st.publishedAt ? ` &nbsp;•&nbsp; ${t.updated}: <time datetime="${st.updatedAt}">${fmtDate(st.updatedAt, st.locale)}</time>` : ''}`,
    reading_line: `${st.readingMinutes} ${t.min_read}`,
    hero_block, takeaways_block, body_html: bodyHtml, sources_block, t_related: t.related,
    share_block, t_comments: t.comments,
    related_cards: related.map(cardHtml).join('\n    ') ||
      `<p class="note">${st.locale === 'id' ? 'Belum ada cerita terkait.' : 'No related stories yet.'}</p>`,
  });
  return tpl('base.html', { ...baseVars(st, all, sectionPath), content });
}

function aboutPage(st, all) {
  const t = T[st.locale];
  const principles = (st.meta.principles || []).map((p) =>
    `<div class="principle"><h3>${esc(p.title)}</h3><p>${esc(p.body)}</p></div>`).join('');
  const steps = (st.meta.steps || []).map((s, i, arr) =>
    `<span>${esc(s)}</span>${i < arr.length - 1 ? '<span class="arrow">→</span>' : ''}`).join('');
  const audience = (st.meta.audience || []).map((a) => `<span class="chip chip-ghost">${esc(a)}</span>`).join('');
  const bodyHtml = marked.parse(st.body);
  const content = tpl('about.html', {
    t_about_chip: t.about_chip, title: esc(st.meta.title), lede: esc(st.meta.lede || ''),
    t_nous_alt: t.nous_alt, t_nous_about_caption: t.nous_about_caption,
    t_flip_hint: t.flip_hint,
    t_what_h: t.what_h, body_html: bodyHtml, t_audience_h: t.audience_h, audience_chips: audience,
    t_principles_h: t.principles_h, principle_cards: principles,
    t_how_h: t.how_h, steps_html: steps, t_how_p: t.how_p,
    t_follow_h: t.follow_h,
    t_closing_h: t.closing_h, t_closing_p: t.closing_p,
  });
  const fakeStory = { ...st, url: storyUrl(st) };
  return tpl('base.html', { ...baseVars(fakeStory, all, fakeStory.url), content });
}

function toolCardHtml(tool, compact, locale) {
  const openLabel = locale === 'id' ? 'Buka tool ↗' : 'Open tool ↗';
  const hl = String(tool.highlights || '').split(';').map((s) => s.trim()).filter(Boolean);
  const chips = hl.map((h) => `<span class="chip chip-ghost">${esc(h)}</span>`).join('');
  const credit = tool.credit ? `<p class="note" style="margin:0">${esc(tool.credit)}</p>` : '';
  return `<div class="card">
    <div class="card-body">
      <h3 class="card-title">${esc(tool.name)}</h3>
      <p class="card-meta" style="margin-top:0">${esc(tool.tagline)}</p>
      ${compact ? '' : `<p style="margin:0">${esc(tool.description)}</p><div class="card-chips">${chips}</div>${credit}`}
      <div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:12px">
        <a class="btn btn-primary" style="min-height:44px;padding:0 20px;font-size:15px" href="${esc(tool.url)}" target="_blank" rel="noopener">${openLabel}</a>
        <a class="btn btn-outline" style="min-height:44px;padding:0 20px;font-size:15px" href="${esc(tool.repo)}" target="_blank" rel="noopener">GitHub ↗</a>
      </div>
    </div>
  </div>`;
}

function karyaPage(st, all) {
  const t = T[st.locale];
  const tools = st.meta.tools || [];
  const bodyHtml = marked.parse(st.body);
  const content = tpl('karya.html', {
    t_karya_chip: t.karya_chip, title: esc(st.meta.title), lede: esc(st.meta.lede || ''),
    body_html: bodyHtml,
    tool_cards: tools.map((tl) => toolCardHtml(tl, false, st.locale)).join('\n    '),
    t_karya_closing_h: t.karya_closing_h, t_karya_closing_p: t.karya_closing_p,
    t_stock_h: t.stock_h, t_stock_p: t.stock_p, t_stock_cta: t.stock_cta,
  });
  const fakeStory = { ...st, url: storyUrl(st) };
  return tpl('base.html', { ...baseVars(fakeStory, all, fakeStory.url), content });
}

function archivePage(locale, section, stories, all) {
  const t = T[locale];
  const formats = {
    berita: ['news', 'research', 'industry'], explainer: ['explainer'], tools: ['tools'],
    news: ['news', 'research', 'industry'], explainers: ['explainer'],
  }[section];
  const items = stories.filter((s) => s.locale === locale && s.layout === 'article' && formats.includes(s.format));
  const topics = [...new Set(items.flatMap((s) => s.topics || []))].sort();
  const chips = [`<button class="filter" data-kind="format" data-value="all" aria-pressed="true">${t.all}</button>`]
    .concat(formats.map((f) => `<button class="filter" data-kind="format" data-value="${f}" aria-pressed="false">${FORMAT_LABEL[locale][f]}</button>`))
    .concat(topics.map((tp) => `<button class="filter" data-kind="topic" data-value="${esc(tp)}" aria-pressed="false">#${esc(tp)}</button>`))
    .join('\n    ');
  const other = locale === 'id' ? 'en' : 'id';
  const fakeStory = { locale, url: `/${locale}/${section}/`, meta: { title: t[`archive_${section}_t`], dek: t[`archive_${section}_d`], seo: { title: t[`archive_${section}_st`] } }, translationGroupId: null, counterpartUrl: `/${other}/${SECTION_COUNTERPART[section]}/`, status: 'published' };
  const content = tpl('archive.html', {
    section_label: t[`archive_${section}_t`], archive_title: t[`archive_${section}_t`],
    archive_lede: t[`archive_${section}_d`], t_filter_label: t.filter_label, filter_chips: chips,
    archive_cards: items.map(cardHtml).join('\n    ') ||
      `<p class="note">${locale === 'id' ? 'Belum ada artikel di sini.' : 'No articles here yet.'}</p>`,
    t_no_results_h: t.no_results_h, t_no_results_p: t.no_results_p,
  });
  return tpl('base.html', { ...baseVars(fakeStory, all, fakeStory.url), content });
}

function homePage(stories, all, locale) {
  const t = T[locale];
  const locStories = stories.filter((s) => s.locale === locale && s.layout === 'article');
  const pick = [];
  for (const f of ['news', 'explainer', 'tools']) {
    const s = locStories.find((x) => x.format === f && !pick.includes(x));
    if (s) pick.push(s);
  }
  for (const s of locStories) if (pick.length < 3 && !pick.includes(s)) pick.push(s);
  const topics = [...new Set(locStories.flatMap((s) => s.topics || []))].sort();
  const newsUrl = locale === 'id' ? '/id/berita/' : '/en/news/';
  const aboutUrl = `/${locale}/about/`;
  const fakeStory = { locale, url: `/${locale}/`, meta: { title: locale === 'id' ? 'hey.nous — Publikasi AI berbahasa Indonesia' : 'hey.nous — AI publication in English', dek: t.hero_lede }, translationGroupId: null, counterpartUrl: locale === 'id' ? '/en/' : '/id/', status: 'published' };
  const karyaStory = stories.find((s) => s.locale === locale && s.layout === 'karya');
  const karyaTools = karyaStory ? (karyaStory.meta.tools || []) : [];
  const content = tpl('home.html', {
    t_kicker: t.kicker, t_hero_h1a: t.hero_h1a, t_hero_h1b: t.hero_h1b, t_hero_lede: t.hero_lede,
    t_cta_news: t.cta_news, t_cta_about: t.cta_about,
    cta_news_url: newsUrl, cta_about_url: aboutUrl, cta_karya_url: karyaStory ? karyaStory.url : `/${locale}/`,
    t_nous_alt: t.nous_alt, t_nous_caption: t.nous_caption, t_nous_caption2: t.nous_caption2,
    t_flip_hint: t.flip_hint,
    t_editors: t.editors, editor_cards: pick.map(cardHtml).join('\n      '),
    t_latest: t.latest,
    latest_rows: locStories.slice(0, 6).map((s) =>
      `<li><span class="date">${esc(fmtDate(s.publishedAt, locale))}</span><a class="title" href="${s.url}">${esc(s.meta.title)}</a><span class="chip chip-ghost">${esc(FORMAT_LABEL[locale][s.format])}</span></li>`).join('\n      '),
    t_topics: t.topics,
    topic_chips: topics.map((tp) => `<a class="topic" href="/${locale}/search/?topik=${encodeURIComponent(tp)}">#${esc(tp)}</a>`).join('\n      '),
    t_karya: t.karya, t_karya_p: t.karya_p, t_karya_cta: t.karya_cta, t_ticker: t.ticker_html,
    karya_cards: karyaTools.map((tl) => toolCardHtml(tl, true, locale)).join('\n      '),
    t_about_panel: t.about_panel, t_about_h: t.about_h, t_about_p: t.about_p,
  });
  return tpl('base.html', { ...baseVars(fakeStory, all, `/${locale}/`), content });
}

function searchPage(locale, all) {
  const t = T[locale];
  const formats = locale === 'id' ? ['news', 'explainer', 'tools', 'research', 'industry'] : ['news', 'explainer', 'tools', 'research', 'industry'];
  const chips = [`<button class="filter" data-kind="format" data-value="all" aria-pressed="true">${t.all}</button>`]
    .concat(formats.map((f) => `<button class="filter" data-kind="format" data-value="${f}" aria-pressed="false">${FORMAT_LABEL[locale][f]}</button>`)).join('\n    ');
  const searchSeoTitle = locale === 'id' ? 'Cari artikel, berita, dan tools | hey.nous' : 'Search articles, news, and tools | hey.nous';
  const fakeStory = { locale, url: locale === 'id' ? '/id/search/' : '/en/search/', meta: { title: t.search_h, dek: t.search_ph, seo: { title: searchSeoTitle } }, translationGroupId: null, counterpartUrl: locale === 'id' ? '/en/search/' : '/id/search/', status: 'published' };
  const content = tpl('search.html', {
    t_search_h: t.search_h, t_search_label: t.search_label, t_search_ph: t.search_ph,
    t_filter_label: t.filter_label, filter_chips: chips,
    t_no_results_h: locale === 'id' ? 'Belum ada hasil untuk pencarian ini.' : 'No results for this search.',
    t_no_results_p: t.no_results_p, t_search_error: t.search_error,
    t_count_one: t.count_one, t_count_many: t.count_many,
    index_url: locale === 'id' ? '/id/search-index.json' : '/en/search-index.json',
    date_locale: t.date_locale,
  });
  return tpl('base.html', { ...baseVars(fakeStory, all, fakeStory.url), content });
}

function notFoundPage() {
  const t = T.en;
  const fakeStory = { locale: 'en', url: '/404.html', meta: { title: '404 | hey.nous', dek: t.f404_p }, translationGroupId: null, counterpartUrl: '/id/', status: 'published' };
  const content = tpl('notfound.html', { t_404_p: t.f404_p, t_404_cta: t.f404_cta, home_url: '/en/' });
  return tpl('base.html', { ...baseVars(fakeStory, [], '/en/'), content });
}

// ---------- main ----------
function main() {
  marked.setOptions({ gfm: true, breaks: false });
  const stories = loadStories();
  console.log(`loaded ${stories.length} published stories`);

  // articles + abouts + karya
  for (const st of stories) {
    const html = st.layout === 'about' ? aboutPage(st, stories)
      : st.layout === 'karya' ? karyaPage(st, stories)
      : articlePage(st, stories);
    const rel = st.url.replace(/^\//, '') + 'index.html';
    writeFile(rel, html);
    console.log('  built:', st.url);
  }
  // home, archives, search (both locales; EN is the default)
  writeFile('id/index.html', homePage(stories, stories, 'id'));
  writeFile('en/index.html', homePage(stories, stories, 'en'));
  for (const section of ['berita', 'explainer', 'tools']) {
    writeFile(`id/${section}/index.html`, archivePage('id', section, stories, stories));
  }
  for (const section of ['news', 'explainers', 'tools']) {
    writeFile(`en/${section}/index.html`, archivePage('en', section, stories, stories));
  }
  writeFile('id/search/index.html', searchPage('id', stories));
  writeFile('en/search/index.html', searchPage('en', stories));
  // root redirect + 404
  writeFile('index.html',
    `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta http-equiv="refresh" content="0;url=/en/"><link rel="canonical" href="https://nous.my.id/en/"><title>hey.nous</title></head><body><p><a href="/en/">Continue to hey.nous</a></p><script>location.replace('/en/')</script></body></html>`);
  writeFile('404.html', notFoundPage());

  // search indexes (per locale)
  for (const locale of ['id', 'en']) {
    const idx = stories
      .filter((s) => s.locale === locale && s.layout === 'article' && (locale === 'id' || s.translationStatus === 'reviewed'))
      .map((s) => ({ title: s.meta.title, dek: s.meta.dek || '', url: s.url, format: s.format, formatLabel: FORMAT_LABEL[locale][s.format] || s.format, topics: s.topics || [], publishedAt: s.publishedAt }));
    const dir = locale === 'id' ? 'id' : 'en';
    if (idx.length || locale === 'id') {
      writeFile(`${dir}/search-index.json`, JSON.stringify(idx));
      console.log(`  index: /${dir}/search-index.json (${idx.length} docs)`);
    }
  }

  // sitemap (absolute URLs only; SITE_URL always set now)
  {
    const urls = ['/en/', '/en/news/', '/en/explainers/', '/en/tools/', '/en/works/', '/en/about/', '/en/search/',
      '/id/', '/id/berita/', '/id/explainer/', '/id/tools/', '/id/karya/', '/id/about/', '/id/search/']
      .concat(stories.map((s) => s.url));
    const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
      [...new Set(urls)].map((u) => {
        const st = stories.find((s) => s.url === u);
        const lastmod = st && st.updatedAt && st.updatedAt !== '1970-01-01' ? `<lastmod>${st.updatedAt}</lastmod>` : '';
        return `  <url><loc>${SITE_URL}${u}</loc>${lastmod}</url>`;
      }).join('\n') + `\n</urlset>\n`;
    writeFile('sitemap.xml', xml);
    console.log('  sitemap.xml written');
  }

  // RSS 2.0 feeds (per locale) -> /en/feed.xml, /id/feed.xml
  for (const locale of ['en', 'id']) {
    const lt = T[locale];
    const feedItems = stories
      .filter((s) => s.locale === locale && s.layout === 'article')
      .sort((a, b) => String(b.publishedAt).localeCompare(String(a.publishedAt)));
    const buildDate = new Date().toUTCString();
    const itemsXml = feedItems.map((s) => {
      const pubDate = new Date(String(s.publishedAt) + 'T00:00:00+07:00').toUTCString();
      const abs = SITE_URL + s.url;
      return '    <item>\n' +
        '      <title>' + esc(s.meta.title) + '</title>\n' +
        '      <link>' + abs + '</link>\n' +
        '      <guid isPermaLink="true">' + abs + '</guid>\n' +
        '      <pubDate>' + pubDate + '</pubDate>\n' +
        '      <description>' + esc(s.meta.dek || '') + '</description>\n' +
        '    </item>';
    }).join('\n');
    const rssXml = '<?xml version="1.0" encoding="UTF-8"?>\n' +
      '<rss version="2.0">\n' +
      '  <channel>\n' +
      '    <title>hey.nous' + (locale === 'id' ? ' (ID)' : '') + '</title>\n' +
      '    <link>' + SITE_URL + '/' + locale + '/</link>\n' +
      '    <description>' + esc(lt.tagline) + '</description>\n' +
      '    <language>' + (locale === 'id' ? 'id' : 'en-us') + '</language>\n' +
      '    <lastBuildDate>' + buildDate + '</lastBuildDate>\n' +
      '    <generator>hey.nous build.js</generator>\n' +
      itemsXml + '\n' +
      '  </channel>\n' +
      '</rss>\n';
    const fdir = locale === 'id' ? 'id' : 'en';
    writeFile(fdir + '/feed.xml', rssXml);
    console.log('  feed: /' + fdir + '/feed.xml (' + feedItems.length + ' items)');
  }

  // llms.txt — plain-text site summary for AI crawlers
  {
    const lines = [
      '# hey.nous',
      '',
      '> hey.nous is an independent publication about AI and technology, publishing in English (default) and Indonesian.',
      '> It covers AI news, explainers, and tool guides, plus a portfolio of free web tools (drawing board, developer toolkit, pomodoro timer).',
      '',
      '## English (default locale)',
      `- [Home](${SITE_URL}/en/): latest stories`,
      `- [News](${SITE_URL}/en/news/): AI news archive`,
      `- [Explainers](${SITE_URL}/en/explainers/): AI explainers archive`,
      `- [Tools](${SITE_URL}/en/tools/): AI tool guides archive`,
      `- [Works](${SITE_URL}/en/works/): portfolio of free web tools`,
      `- [About](${SITE_URL}/en/about/): about hey.nous`,
    ];
    for (const s of stories.filter((s) => s.locale === 'en' && s.layout === 'article' && s.translationStatus === 'reviewed')) {
      lines.push(`- [${s.meta.title}](${SITE_URL}${s.url}): ${s.meta.dek || ''}`);
    }
    lines.push('', '## Indonesia', `- [Beranda](${SITE_URL}/id/): cerita terbaru`);
    for (const s of stories.filter((s) => s.locale === 'id' && s.layout === 'article')) {
      lines.push(`- [${s.meta.title}](${SITE_URL}${s.url}): ${s.meta.dek || ''}`);
    }
    writeFile('llms.txt', lines.join('\n') + '\n');
    console.log('  llms.txt written');
  }

  // styles.css, assets/, _redirects, _headers already live at repo root; nothing to copy.
  console.log('\ndone.');
}

main();
