# VESPHEx

Personal system site for [vesphex.tech](https://vesphex.tech).

Static Astro + TypeScript. No backend. No analytics. No required environment variables. Designed for Cloudflare Pages on the free tier.

## Local development

Requires Node.js 22 or newer.

```bash
npm install
npm run dev
```

The site is available at `http://localhost:4321`.

## Production build

```bash
npm run build
```

Static files are written to `dist/`.

Preview the production output locally:

```bash
npm run preview
```

## Cloudflare deployment

This project is a static site. It does not need Workers, KV, D1, R2, or any paid Cloudflare product.

### Dashboard + GitHub (recommended)

1. Push this repository to GitHub.
2. Open [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Select the GitHub repository.
4. Use these build settings:

| Setting | Value |
| --- | --- |
| Framework preset | Astro |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node version | `22` |

5. Deploy.
6. In the Pages project, add a custom domain: `vesphex.tech` (and `www` if you use it). Point DNS to Cloudflare if it is not already.

Cloudflare will rebuild automatically on every push to the production branch.

### Optional CLI deploy

After a local production build:

```bash
npx wrangler pages deploy dist
```

`wrangler.jsonc` is included only as a convenience. It is not required for Dashboard Git deploys.

## Environment variables

None.

Basic functionality does not read `.env` files, API keys, or secrets. Do not put secrets in frontend code.

If a future integration needs a key, keep it in a Cloudflare Worker secret — never in `src/`.

## How to update social links

Edit `src/config/site.ts`.

```ts
social: {
  x: { label: 'X / Twitter', href: 'https://x.com/yourhandle' },
  github: { label: 'GitHub', href: 'https://github.com/yourhandle' },
  discord: { label: 'Discord', href: 'https://discord.gg/your-invite' },
  twitch: { label: 'Twitch', href: 'https://twitch.tv/yourhandle' },
  email: { label: 'Email', href: 'mailto:operator@vesphex.tech' },
}
```

Leave `href` as an empty string until the address is real. Empty channels render as **Signal pending** and are not linked.

## How to add projects

1. Open `src/data/projects.ts`.
2. Add an object with `slug`, `name`, `status`, `category`, `summary`, `description`, and `tags`.
3. Rebuild. Astro generates `/lab/your-slug` automatically.

The lab grid on the homepage reads the same file.

## How to change branding

| What | Where |
| --- | --- |
| Name, title, description, tagline, system status | `src/config/site.ts` |
| Navigation | `src/data/nav.ts` |
| Operator copy and pillars | `src/data/operator.ts` |
| Arena / Deadlock placeholders | `src/data/arena.ts` |
| Network nodes | `src/data/network.ts` |
| Digital territory | `src/data/territory.ts` |
| Philosophy copy | `src/data/signal.ts` |
| Colors, type, spacing | `src/styles/global.css` |
| Favicon / mark | `public/favicon.svg` |
| Social preview image | `public/og.svg` and `public/og.png` |

After changing `og.svg`, regenerate the PNG:

```bash
rsvg-convert -w 1200 -h 630 public/og.svg > public/og.png
```

If you add or rename project pages, bump `updatedAt` in `src/config/site.ts` so `sitemap.xml` stays honest.

## Architecture

```
src/
  config/site.ts          Central site + social configuration
  data/                   Structured content (projects, arena, network, ...)
  components/             Page sections and shared UI
  layouts/BaseLayout.astro
  pages/                  Homepage, lab nodes, 404, sitemap
  styles/global.css       Design tokens and shared rules
public/                   Favicon, OG image, robots.txt, headers
```

The production build is static HTML, CSS, fonts, and a few images. Client JavaScript is limited to closing the mobile navigation after a same-page jump.

### Future backend

Do not add a resident server. If live telemetry, a contact form, or private APIs are needed later, attach a Cloudflare Worker in front of the same Pages project. Workers remain optional and can stay on the free tier. This repository does not implement that layer.

## What this stack does not require

- Paid Cloudflare services
- Paid APIs
- VPS, Docker, or a process that stays running
- Supabase, Firebase, AWS, or Vercel
- Environment variables for the public site
- Analytics or tracking
