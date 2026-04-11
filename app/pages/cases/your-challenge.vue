<script setup lang="ts">
const { getCaseBySlug } = useCases()
const caseEntry = getCaseBySlug('your-challenge')
const readingProgress = ref(0)

const updateReadingProgress = () => {
  const root = document.documentElement
  const scrollable = root.scrollHeight - window.innerHeight

  readingProgress.value = scrollable > 0
    ? Math.min(100, Math.max(0, Math.round((window.scrollY / scrollable) * 100)))
    : 0
}

if (!caseEntry) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Case not found',
  })
}

useSeoMeta({
  title: caseEntry.seo.title,
  description: caseEntry.seo.description,
  ogTitle: caseEntry.seo.title,
  ogLocale: 'ru_RU',
  robots: caseEntry.seo.robots,
})

onMounted(() => {
  updateReadingProgress()
  window.addEventListener('scroll', updateReadingProgress, { passive: true })
  window.addEventListener('resize', updateReadingProgress)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateReadingProgress)
  window.removeEventListener('resize', updateReadingProgress)
})
</script>

<template>
  <div class="case-page">
    <CasesYourChallengeCaseHero />
    <CasesYourChallengeCaseTldr />
    <CasesYourChallengeCaseContext />
    <CasesYourChallengeCaseProblem />
    <CasesYourChallengeCaseSolution />
    <CasesYourChallengeCaseWork />
    <CasesYourChallengeCaseResults />
    <CasesYourChallengeCaseProblems />
    <CasesYourChallengeCaseConclusions />

    <div class="reading-progress" aria-label="Прогресс чтения страницы">
      <span class="reading-progress__label">Прочитано</span>
      <strong class="reading-progress__value">{{ readingProgress }}%</strong>
      <span
        class="reading-progress__bar"
        role="progressbar"
        :aria-valuenow="readingProgress"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <span :style="{ width: `${readingProgress}%` }" />
      </span>
    </div>
  </div>
</template>

<style scoped>
.case-page {
  display: flex;
  flex-direction: column;
  gap: clamp(var(--spacing-16), 8vw, var(--spacing-24));
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: var(--spacing-20);
}

.reading-progress {
  position: fixed;
  z-index: 20;
  left: var(--spacing-6);
  bottom: var(--spacing-6);
  display: grid;
  grid-template-columns: auto auto;
  gap: 4px var(--spacing-2);
  align-items: center;
  min-width: 136px;
  padding: 10px 12px;
  border: 1px solid color-mix(in srgb, var(--color-border-subtle) 86%, transparent);
  border-radius: var(--radius-lg);
  background: color-mix(in srgb, var(--color-bg-surface) 86%, transparent);
  box-shadow: var(--shadow-surface);
  backdrop-filter: blur(16px);
}

.reading-progress__label {
  color: var(--color-text-tertiary);
  font-size: var(--text-caption);
  font-weight: var(--font-weight-heading);
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.reading-progress__value {
  justify-self: end;
  color: var(--color-text-primary);
  font-size: var(--text-label);
  line-height: 1;
}

.reading-progress__bar {
  grid-column: 1 / -1;
  height: 3px;
  overflow: hidden;
  border-radius: var(--radius-pill);
  background: color-mix(in srgb, var(--color-border-default) 58%, transparent);
}

.reading-progress__bar span {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: var(--color-brand-primary);
  transition: width 0.12s ease-out;
}

@media (max-width: 760px) {
  .reading-progress {
    left: var(--spacing-4);
    bottom: var(--spacing-4);
  }
}
</style>
