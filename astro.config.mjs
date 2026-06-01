import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
// Note: I removed the `import node from 'astro/logger/node';` as it was unused and could cause issues.

// Detect if we are running locally (dev) or building for GitHub Pages (production)
const isDev = process.env.NODE_ENV === 'development';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.hjortolars.se',
  output: 'static', 
  integrations: [
    react(), 
    // Only inject Keystatic (and its server routes) during local development
    ...(isDev ? [keystatic()] : [])
  ],
});