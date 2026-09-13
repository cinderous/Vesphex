// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://vesphex.tech',
  output: 'static',
  trailingSlash: 'never',
  compressHTML: true,
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
});
