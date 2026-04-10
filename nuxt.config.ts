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
    css: {
      preprocessorOptions: {
        scss: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          api: 'modern-compiler' as any,
        },
      },
    },
  },
})
