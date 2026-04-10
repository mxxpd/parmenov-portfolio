<script setup lang="ts">
import { useScrollReveal } from '../../../composables/useScrollReveal'

const { bind, isVisible } = useScrollReveal()
</script>

<template>
  <section :ref="bind" class="section" :class="{ 'is-visible': isVisible }">
    <p class="label">Артефакты</p>
    <h2 class="heading">Рабочие материалы</h2>

    <div class="row">
      <PlaceholderImage label="User flow — онбординг и поиск матча" :height="260" />
      <PlaceholderImage label="CJM — путь пользователя, фрагмент" :height="260" />
    </div>

    <div class="screens">
      <PlaceholderImage label="Скриншот: главный экран" :height="300" />
      <PlaceholderImage label="Скриншот: поиск матча" :height="300" />
      <PlaceholderImage label="Скриншот: результаты" :height="300" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.section {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-6);
  opacity: 0;
  transform: translateY(12px);
  transition: opacity 0.45s ease, transform 0.45s ease;
}
.section.is-visible { opacity: 1; transform: translateY(0); }

.label {
  font-size: var(--text-label);
  font-weight: var(--font-weight-heading);
  color: var(--color-text-accent);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
.heading {
  font-size: var(--text-h1);
  font-weight: var(--font-weight-display);
  line-height: var(--line-height-heading);
  color: var(--color-text-primary);
  margin-top: calc(-1 * var(--spacing-3));
}

.row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-3);
}
.screens {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-3);
}

@media (max-width: 640px) {
  .row, .screens { grid-template-columns: 1fr; }
}
</style>
