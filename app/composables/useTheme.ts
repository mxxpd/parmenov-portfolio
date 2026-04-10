type ThemeMode = 'light' | 'dark'

const STORAGE_KEY = 'nova-theme'

function getSystemTheme(): ThemeMode {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function applyTheme(theme: ThemeMode) {
  document.documentElement.dataset.theme = theme
  document.documentElement.style.colorScheme = theme
}

export function useTheme() {
  const theme = useState<ThemeMode>('theme', () => 'light')
  const preference = useState<ThemeMode | null>('theme-preference', () => null)

  const setTheme = (nextTheme: ThemeMode) => {
    theme.value = nextTheme
    preference.value = nextTheme

    if (import.meta.client) {
      localStorage.setItem(STORAGE_KEY, nextTheme)
      applyTheme(nextTheme)
    }
  }

  if (import.meta.client) {
    const syncTheme = () => {
      const nextTheme = preference.value ?? getSystemTheme()
      theme.value = nextTheme
      applyTheme(nextTheme)
    }

    onMounted(() => {
      const storedTheme = localStorage.getItem(STORAGE_KEY)

      if (storedTheme === 'light' || storedTheme === 'dark') {
        preference.value = storedTheme
      }

      syncTheme()

      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      const handleChange = () => {
        if (!preference.value) {
          syncTheme()
        }
      }

      mediaQuery.addEventListener('change', handleChange)
      onScopeDispose(() => mediaQuery.removeEventListener('change', handleChange))
    })
  }

  return {
    preference: readonly(preference),
    setTheme,
    theme: readonly(theme),
  }
}
