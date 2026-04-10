<script setup lang="ts">
const route = useRoute()
const { getCaseBySlug } = useCases()

const slug = computed(() => String(route.params.slug))
const caseEntry = computed(() => getCaseBySlug(slug.value))

if (!caseEntry.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Case not found',
  })
}

useSeoMeta({
  title: () => caseEntry.value!.seo.title,
  description: () => caseEntry.value!.seo.description,
  ogTitle: () => caseEntry.value!.seo.title,
  ogLocale: 'ru_RU',
  robots: () => caseEntry.value!.seo.robots ?? 'index, follow',
})
</script>

<template>
  <div class="stub">
    <p class="stub__label">{{ caseEntry?.status === 'stub' ? 'В разработке' : 'Кейс' }}</p>
    <h1 class="stub__title">{{ caseEntry?.title }}</h1>
    <p class="stub__text">{{ caseEntry?.description }}</p>
    <AppButton label="Все кейсы" variant="secondary" href="/cases" />
  </div>
</template>

<style scoped>
.stub {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-4);
  min-height: 50vh;
  text-align: center;
}

.stub__label {
  font-size: var(--text-caption);
  font-weight: var(--font-weight-heading);
  color: var(--color-text-accent);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.stub__title {
  font-size: var(--text-h2);
  font-weight: var(--font-weight-display);
  color: var(--color-text-primary);
  line-height: var(--line-height-heading);
}

.stub__text {
  max-width: 34ch;
  font-size: var(--text-body);
  color: var(--color-text-secondary);
  line-height: var(--line-height-body-relaxed);
}
</style>
