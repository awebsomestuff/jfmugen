// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://jfmugen.com',
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
