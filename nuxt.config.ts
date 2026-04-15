import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  devtools: { enabled: process.env.NODE_ENV === 'development' },
  modules: ['@nuxt/eslint'],
  css: ['~/assets/styles/main.scss'],
  compatibilityDate: '2024-11-01',
  routeRules: {
    '/cases/your-challenge': {
      headers: {
        'X-Robots-Tag': 'noindex, nofollow, noarchive, nosnippet, noimageindex',
      },
    },
  },
  app: {
    head: {
      title: 'Максим Парменов — Product дизайнер',
      meta: [
        { name: 'description', content: 'UX-архитектура, сценарии, визуальная система — и понимание, зачем всё это нужно бизнесу.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Максим Парменов' },
        { property: 'og:title', content: 'Максим Парменов — Product дизайнер' },
        { property: 'og:description', content: 'UX-архитектура, сценарии, визуальная система — и понимание, зачем всё это нужно бизнесу.' },
        { property: 'og:image', content: 'https://parmenov.com/og.png' },
        { property: 'og:url', content: 'https://parmenov.com' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Максим Парменов — Product дизайнер' },
        { name: 'twitter:description', content: 'UX-архитектура, сценарии, визуальная система — и понимание, зачем всё это нужно бизнесу.' },
        { name: 'twitter:image', content: 'https://parmenov.com/og.png' },
      ],
      script: [
        {
          innerHTML: `
            (() => {
              const storageKey = 'nova-theme';
              const storedTheme = localStorage.getItem(storageKey);
              const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
              const resolvedTheme = storedTheme === 'dark' || storedTheme === 'light' ? storedTheme : systemTheme;
              document.documentElement.dataset.theme = resolvedTheme;
              document.documentElement.style.colorScheme = resolvedTheme;
            })();
          `,
        },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Onest:wght@400;500;600;700;800&display=swap',
        },
      ],
    },
  },
  vite: {
    plugins: [svgLoader({ defaultImport: 'component' })],
  },
})
