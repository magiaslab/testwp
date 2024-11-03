import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import react from '@astrojs/react';
import auth from 'auth-astro';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
  integrations: [
    tailwind({
      configFile: 'tailwind.config.mjs'
    }), 
    react(), 
    icon(),
    auth()
  ]
});
