# River of Life Church — Website

A multi-page website for **River of Life Church**, a Christian church and ministry
operating entirely in the **Second Life** virtual world.

Built with [Vite](https://vitejs.dev/) as a plain multi-page HTML/CSS/JS site — no
framework, no build complexity.

## Pages

| Path | Page |
|---|---|
| `/` | Home |
| `/about/` | About River of Life |
| `/worship/` | Worship With Us |
| `/second-life/` | New to Second Life (getting-started guide) |
| `/ministries/` | Ministries |
| `/events/` | Events |
| `/prayer/` | Prayer Ministry (+ request form) |
| `/media/` | Media (photos/videos — placeholders) |
| `/connect/` | Connect With Us (+ contact form) |
| `/visit/` | Visit River of Life in Second Life |

## Run It Locally

```bash
npm install
npm run dev
```

Then open **http://localhost:5173** in your browser. Edits reload instantly.

> No npm right now? Just double-click `index.html` — the site uses relative paths,
> so it also works straight from the file system.

## Build for Production

```bash
npm run build     # outputs static site to dist/
npm run preview   # test the production build locally
```

Upload the contents of `dist/` to any static host (Netlify, Vercel, GitHub Pages, etc.).
Because the build uses relative paths (`base: './'`), it works from any subfolder or
subdomain — e.g. `riveroflife.church`.

## Project Structure

```
├── index.html              # Home page
├── about/  worship/  second-life/  ministries/  events/
├── prayer/  media/  connect/  visit/    # one folder per page
├── assets/
│   ├── css/global.css      # all site styles
│   ├── js/main.js          # nav toggle, form demo, footer year
│   └── favicon.svg
├── public/                 # copied as-is to dist/ (robots.txt)
└── vite.config.js          # multi-page inputs + relative base
```

## Phase 2 TODOs

- [ ] Connect the prayer + contact forms to a real service (e.g. Formspree /
      Netlify Forms) — replace the demo handlers in `assets/js/main.js`
- [ ] Add real photos from Second Life to the Media page (`assets/images/`)
- [ ] Add the real SLURL teleport link to `visit/index.html` (two buttons)
- [ ] Add real Facebook / Discord invite URLs (currently placeholder links)
- [ ] Add og-image + apple-touch-icon PNGs for social sharing
- [ ] Add real events dates on the Events page
- [ ] Sitemap (a static `public/sitemap.xml` works fine)
