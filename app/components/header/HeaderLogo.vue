<template>
  <NuxtLink to="/" class="header-logo" aria-label="На главную">
    <LogoIcon class="header-logo__icon" />
    <span class="header-logo__name">Парменов</span>
  </NuxtLink>
</template>

<script setup lang="ts">
import LogoIcon from '~/assets/icons/logo.svg'
</script>

<style scoped>
.header-logo {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-3);
  text-decoration: none;
  color: var(--color-text-primary);
  flex-shrink: 0;
}

.header-logo__icon {
  width: 42px;
  height: 42px;
  border-radius: var(--radius-lg);
  flex-shrink: 0;

  /* subtle ring so beige bg is always visible against light theme */
  box-shadow: 0 0 0 1px color-mix(in srgb, var(--color-border-subtle) 60%, transparent);

  transition: opacity 0.18s ease;
}

.header-logo:hover .header-logo__icon {
  opacity: 0.88;
}

.header-logo__name {
  font-size: 20px;
  font-weight: var(--font-weight-display);
  letter-spacing: -0.02em;
  white-space: nowrap;
}
</style>
