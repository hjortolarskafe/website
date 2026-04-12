import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.hjortolars.se', // Your custom domain
  output: 'static', // Tells Astro to allow the Keystatic dashboard to run
  integrations: [react(), keystatic()],
});