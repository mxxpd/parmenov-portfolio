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
  <div class="case-stub">
    <p class="case-stub__label">{{ caseEntry?.status === 'stub' ? 'В разработке' : 'Кейс' }}</p>
    <h1 class="case-stub__title">{{ caseEntry?.title }}</h1>
    <p class="case-stub__text">{{ caseEntry?.description }}</p>
    <AppButton label="Все кейсы" variant="secondary" href="/cases" />
  </div>
</template>
