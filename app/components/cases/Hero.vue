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
  <NuxtLink :to="`/cases/${slug}`" class="case-hero">
    <div class="case-hero__info">
      <div class="case-hero__top">
        <span class="case-tag">{{ type }}</span>
        <span class="case-hero__year">{{ year }}</span>
      </div>
      <div class="case-hero__bottom">
        <h2 class="case-hero__name">{{ title }}</h2>
        <p v-if="description" class="case-hero__desc">{{ description }}</p>
        <div class="case-hero__footer">
          <p class="case-hero__role">{{ role }}</p>
          <ArrowIcon class="case-hero__arrow" />
        </div>
      </div>
    </div>
    <div class="case-hero__cover-wrap">
      <div class="case-hero__cover" :style="coverStyle" />
    </div>
  </NuxtLink>
</template>

<style scoped>
.case-hero {
  display: flex;
  min-height: 460px;
  border-radius: var(--radius-xl);
  background: var(--color-bg-surface);
  border: 1px solid var(--color-border-subtle);
  box-shadow: var(--shadow-subtle);
  text-decoration: none;
  color: inherit;
  transition: box-shadow 0.22s ease, transform 0.22s ease;
}

.case-hero:hover {
  box-shadow: var(--shadow-surface);
  transform: translateY(-3px);
}

.case-hero:hover .case-hero__cover {
  transform: scale(1.04);
}

.case-hero:hover .case-hero__arrow {
  opacity: 1;
  transform: translate(0, 0);
  color: var(--color-text-primary);
}

/* Info panel */
.case-hero__info {
  flex: 0 0 40%;
  display: flex;
  flex-direction: column;
  padding: var(--spacing-8);
}

.case-hero__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.case-tag {
  display: inline-flex;
  align-items: center;
  padding: 4px var(--spacing-3);
  border-radius: var(--radius-pill);
  background: var(--color-bg-accent-soft);
  border: 1px solid var(--color-border-accent);
  color: var(--color-text-accent);
  font-size: var(--text-caption);
  font-weight: var(--font-weight-heading);
  white-space: nowrap;
  width: fit-content;
}

.case-hero__year {
  font-size: var(--text-body-sm);
  color: var(--color-text-tertiary);
}

.case-hero__bottom {
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
}

.case-hero__name {
  font-size: clamp(40px, 4.5vw, 64px);
  font-weight: var(--font-weight-display);
  line-height: var(--line-height-display);
  color: var(--color-text-primary);
}

.case-hero__desc {
  font-size: var(--text-body);
  color: var(--color-text-secondary);
  line-height: var(--line-height-body-relaxed);
}

.case-hero__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.case-hero__role {
  font-size: var(--text-body-sm);
  color: var(--color-text-secondary);
}

.case-hero__arrow {
  width: 18px;
  height: 18px;
  color: var(--color-text-tertiary);
  flex-shrink: 0;
  opacity: 0;
  transform: translate(-4px, 4px);
  transition: opacity 0.22s ease, transform 0.22s ease, color 0.22s ease;
}

/* Cover panel */
.case-hero__cover-wrap {
  flex: 1;
  overflow: hidden;
  border-radius: 0 var(--radius-xl) var(--radius-xl) 0;
}

.case-hero__cover {
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease;
}

/* Responsive */
@media (max-width: 1100px) {
  .case-hero__info {
    flex: 0 0 46%;
  }
}

@media (max-width: 768px) {
  .case-hero {
    flex-direction: column-reverse;
    min-height: unset;
    box-shadow: var(--shadow-raised);
  }

  .case-hero__info {
    flex: none;
    padding: var(--spacing-6);
  }

  /* flex: none fixes height being overridden by flex-basis: 0 from desktop flex: 1 */
  .case-hero__cover-wrap {
    flex: none;
    height: 380px;
    border-radius: var(--radius-xl) var(--radius-xl) 0 0;
  }
}

@media (max-width: 540px) {
  .case-hero__info {
    padding: var(--spacing-4);
  }
}
</style>
