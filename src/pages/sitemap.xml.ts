import type { APIRoute } from 'astro';
import { absoluteUrl, site } from '../config/site';
import { projects } from '../data/projects';

const pages = ['/', ...projects.map((project) => `/lab/${project.slug}`)];

export const GET: APIRoute = () => {
  const urls = pages
    .map((path) => {
      const loc = absoluteUrl(path);
      return `  <url>
    <loc>${loc}</loc>
    <lastmod>${site.updatedAt}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${path === '/' ? '1.0' : '0.7'}</priority>
  </url>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
