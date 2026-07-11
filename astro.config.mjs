// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const canonicalSite = 'https://www.andor.is';
const localizedRoutePairs = [
  ['/', '/en/'],
  ['/stjornkerfi/', '/en/control-systems/'],
  ['/verkefni/', '/en/projects/'],
  ['/myscada/', '/en/myscada/'],
  ['/um-andor/', '/en/about/'],
  ['/hafa-samband/', '/en/contact/'],
];

// https://astro.build/config
export default defineConfig({
  site: canonicalSite,
  trailingSlash: 'always',
  i18n: {
    locales: ['is', 'en'],
    defaultLocale: 'is',
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      filter(page) {
        return ['/', '/en/'].includes(new URL(page).pathname);
      },
      serialize(item) {
        const pathname = new URL(item.url).pathname;
        const pair = localizedRoutePairs.find((paths) => paths.includes(pathname));

        if (pair) {
          const [isPath, enPath] = pair;
          item.links = [
            { lang: 'is', url: new URL(isPath, canonicalSite).href },
            { lang: 'en', url: new URL(enPath, canonicalSite).href },
            { lang: 'x-default', url: new URL(isPath, canonicalSite).href },
          ];
        }

        return item;
      },
    }),
  ],
});
