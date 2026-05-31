import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://generalsoft.ae',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ar', 'de'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
