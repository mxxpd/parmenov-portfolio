<script setup lang="ts">
import LogoIcon from '~/assets/icons/logo.svg'

const emit = defineEmits<{ close: [] }>()

const { theme, setTheme } = useTheme()

const links = [
  { label: 'Главная', to: '/' },
  { label: 'Кейсы', to: '/cases' },
  { label: 'Сервисы', to: '/services' },
  { label: 'Статьи', to: '/articles' },
]
</script>

<template>
  <div class="mmenu">
    <!-- Top bar — mirrors header -->
    <div class="mmenu__bar">
      <NuxtLink to="/" class="mmenu__logo" @click="emit('close')">
        <LogoIcon class="mmenu__logo-icon" />
        <span class="mmenu__logo-name">Парменов</span>
      </NuxtLink>
      <HeaderMenuButton :is-open="true" @toggle="emit('close')" />
    </div>

    <!-- Nav links -->
    <nav class="mmenu__nav" aria-label="Мобильная навигация">
      <NuxtLink
        v-for="link in links"
        :key="link.label"
        :to="link.to"
        class="mmenu__link"
        active-class="mmenu__link--active"
        @click="emit('close')"
      >
        {{ link.label }}
      </NuxtLink>
    </nav>

    <!-- Footer: theme → CTA (stacked, clear hierarchy) -->
    <div class="mmenu__footer">
      <div class="mmenu__theme">
        <button
          type="button"
          class="mmenu__theme-btn"
          :class="{ 'mmenu__theme-btn--active': theme === 'light' }"
          @click="setTheme('light')"
        >
          Светлая
        </button>
        <button
          type="button"
          class="mmenu__theme-btn"
          :class="{ 'mmenu__theme-btn--active': theme === 'dark' }"
          @click="setTheme('dark')"
        >
          Тёмная
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes link-in {
  from { opacity: 0; transform: translateX(-10px); }
  to   { opacity: 1; transform: translateX(0); }
}

.mmenu {
  position: fixed;
  inset: 0;
  z-index: 30;
  display: flex;
  flex-direction: column;
  background: color-mix(in srgb, var(--color-bg-canvas) 97%, transparent);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
}

/* ── Top bar ── */
.mmenu__bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-4) var(--spacing-6);
  border-bottom: 1px solid var(--color-border-subtle);
  flex-shrink: 0;
}

.mmenu__logo {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-3);
  text-decoration: none;
  color: var(--color-text-primary);
}

.mmenu__logo-icon {
  width: 42px;
  height: 42px;
  border-radius: var(--radius-lg);
  flex-shrink: 0;
  box-shadow: 0 0 0 1px color-mix(in srgb, var(--color-border-subtle) 60%, transparent);
}

.mmenu__logo-name {
  font-size: 20px;
  font-weight: var(--font-weight-display);
  letter-spacing: -0.02em;
}

/* ── Nav ── */
.mmenu__nav {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-1);
  padding: var(--spacing-4) var(--spacing-4);
  flex: 1;
}

.mmenu__link {
  display: flex;
  align-items: center;
  padding: var(--spacing-4) var(--spacing-4);
  border-radius: var(--radius-lg);
  font-size: var(--text-h2);
  font-weight: var(--font-weight-display);
  line-height: var(--line-height-heading);
  color: var(--color-text-tertiary);
  text-decoration: none;
  transition: background 0.18s ease, color 0.18s ease;
  animation: link-in 0.3s ease both;
}

.mmenu__link:nth-child(1) { animation-delay: 0.04s; }
.mmenu__link:nth-child(2) { animation-delay: 0.09s; }
.mmenu__link:nth-child(3) { animation-delay: 0.14s; }
.mmenu__link:nth-child(4) { animation-delay: 0.19s; }

.mmenu__link:hover,
.mmenu__link--active {
  background: var(--color-bg-surface);
  color: var(--color-text-primary);
}

/* ── Footer ── */
.mmenu__footer {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
  padding: var(--spacing-6);
  border-top: 1px solid var(--color-border-subtle);
  flex-shrink: 0;
}

.mmenu__theme {
  display: flex;
  align-items: center;
  gap: var(--spacing-1);
  padding: var(--spacing-1);
  border-radius: var(--radius-pill);
  background: color-mix(in srgb, var(--color-bg-surface-muted) 78%, transparent);
  width: fit-content;
}

.mmenu__theme-btn {
  display: inline-flex;
  align-items: center;
  padding: 10px 16px;
  border: none;
  border-radius: var(--radius-pill);
  background: transparent;
  color: var(--color-text-secondary);
  font-family: var(--font-sans);
  font-size: var(--text-body-sm);
  font-weight: var(--font-weight-heading);
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.18s ease, color 0.18s ease;
}

.mmenu__theme-btn:hover,
.mmenu__theme-btn--active {
  background: var(--color-bg-surface);
  color: var(--color-text-primary);
}

</style>
