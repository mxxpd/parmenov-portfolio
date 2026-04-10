<script setup lang="ts">
import ArrowIcon from '~/assets/icons/arrow-up-right.svg'

interface Props {
  slug: string
  title: string
  type: string
  description?: string
  role: string
  year: number
  coverFrom: string
  coverTo: string
}

const props = defineProps<Props>()

const coverStyle = computed(() => ({
  background: `linear-gradient(145deg, ${props.coverFrom}, ${props.coverTo})`,
}))
</script>

<template>
  <NuxtLink :to="`/cases/${slug}`" class="case-card">
    <div class="case-card__cover-wrap">
      <div class="case-card__cover" :style="coverStyle" />
      <span class="case-tag">{{ type }}</span>
    </div>
    <div class="case-card__info">
      <div class="case-card__body">
        <h3 class="case-card__name">{{ title }}</h3>
        <p v-if="description" class="case-card__desc">{{ description }}</p>
      </div>
      <div class="case-meta">
        <span>{{ role }}</span>
        <span aria-hidden="true">·</span>
        <span>{{ year }}</span>
      </div>
      <ArrowIcon class="case-arrow" />
    </div>
  </NuxtLink>
</template>

<style scoped>
.case-card {
  display: flex;
  flex-direction: column;
  border-radius: var(--radius-xl);
  background: var(--color-bg-surface);
  border: 1px solid var(--color-border-subtle);
  box-shadow: var(--shadow-subtle);
  text-decoration: none;
  color: inherit;
  transition: box-shadow 0.22s ease, transform 0.22s ease;
}

.case-card:hover {
  box-shadow: var(--shadow-surface);
  transform: translateY(-3px);
}

.case-card:hover .case-card__cover {
  transform: scale(1.06);
}

/* Cover */
.case-card__cover-wrap {
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  border-radius: var(--radius-xl) var(--radius-xl) 0 0;
}

.case-card__cover {
  aspect-ratio: 4 / 3;
  width: 100%;
  transition: transform 0.5s ease;
}

/* Tag — frosted glass overlay on cover */
.case-tag {
  position: absolute;
  top: var(--spacing-4);
  left: var(--spacing-4);
  z-index: 1;
  display: inline-flex;
  align-items: center;
  padding: 4px var(--spacing-3);
  border-radius: var(--radius-pill);
  background: rgba(0, 0, 0, 0.18);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.22);
  color: rgba(255, 255, 255, 0.92);
  font-size: var(--text-caption);
  font-weight: var(--font-weight-heading);
  white-space: nowrap;
}

/* Info section */
.case-card__info {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: var(--spacing-4);
  padding: var(--spacing-6);
  flex: 1;
}

.case-card__body {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
}

.case-card__name {
  font-size: var(--text-h2);
  font-weight: var(--font-weight-display);
  line-height: var(--line-height-heading);
  color: var(--color-text-primary);
}

.case-card__desc {
  font-size: var(--text-body-sm);
  color: var(--color-text-secondary);
  line-height: var(--line-height-body-relaxed);
}

.case-meta {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  font-size: var(--text-body-sm);
  color: var(--color-text-tertiary);
}

/* Arrow */
.case-arrow {
  position: absolute;
  bottom: var(--spacing-6);
  right: var(--spacing-6);
  width: 18px;
  height: 18px;
  color: var(--color-text-tertiary);
  opacity: 0;
  transform: translate(4px, -4px);
  transition: opacity 0.22s ease, transform 0.22s ease;
}

.case-card:hover .case-arrow {
  opacity: 1;
  transform: translate(0, 0);
}
</style>
