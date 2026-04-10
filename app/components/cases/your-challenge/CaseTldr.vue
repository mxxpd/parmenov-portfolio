<script setup lang="ts">
import { useScrollReveal } from '../../../composables/useScrollReveal'

const { bind, isVisible } = useScrollReveal()
const typo = useTypograf()

const text = computed(() =>
  typo(
    'Платформа для соревновательных игр на деньги не росла 5 месяцев. Я предложил сменить core-механику, спроектировал новый user flow и запустил MVP. Результат: ×13 к базе пользователей, 40% конверсия в первый матч, активные игроки возвращались ежедневно.',
  ),
)
</script>

<template>
  <div :ref="bind" class="tldr" :class="{ 'is-visible': isVisible }">
    <div class="tldr__lead">
      <p class="tldr__label">TL;DR</p>
    </div>

    <p class="tldr__text">{{ text }}</p>
  </div>
</template>

<style lang="scss" scoped>
.tldr {
  display: grid;
  grid-template-columns: 96px minmax(0, 1fr);
  gap: var(--spacing-5);
  align-items: start;
  padding: clamp(22px, 2.4vw, 32px);
  border: 1px solid color-mix(in srgb, var(--color-border-accent) 54%, transparent);
  border-radius: 30px;
  background:
    radial-gradient(circle at top right, color-mix(in srgb, var(--color-brand-primary) 5%, transparent), transparent 28%),
    linear-gradient(180deg, color-mix(in srgb, var(--color-bg-accent-soft) 78%, transparent), color-mix(in srgb, var(--color-bg-surface) 98%, transparent));
  box-shadow: var(--shadow-subtle);
  opacity: 0;
  transform: translateY(12px);
  transition: opacity 0.45s ease, transform 0.45s ease;
}

.tldr.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.tldr__lead {
  padding-top: 2px;
}

.tldr__label {
  font-size: var(--text-label);
  font-weight: var(--font-weight-heading);
  color: var(--color-text-accent);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.tldr__text {
  max-width: 54ch;
  font-size: clamp(18px, 1.65vw, 24px);
  font-weight: var(--font-weight-body-strong);
  line-height: 1.5;
  color: color-mix(in srgb, var(--color-text-primary) 92%, var(--color-text-secondary));
}

@media (max-width: 900px) {
  .tldr {
    grid-template-columns: 1fr;
    gap: var(--spacing-2);
  }

  .tldr__lead {
    padding-top: 0;
  }
}

@media (max-width: 640px) {
  .tldr__text {
    font-size: var(--text-body);
    line-height: var(--line-height-body-relaxed);
  }
}
</style>
