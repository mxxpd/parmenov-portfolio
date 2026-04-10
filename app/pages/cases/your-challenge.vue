<script setup lang="ts">
const { getCaseBySlug } = useCases()
const caseEntry = getCaseBySlug('your-challenge')

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
</script>

<template>
  <div class="case-page">
    <CasesYourChallengeCaseHero />
    <CasesYourChallengeCaseTldr />
    <CasesYourChallengeCaseContext />
    <CasesYourChallengeCaseProblem />
    <CasesYourChallengeCaseSolution />
    <CasesYourChallengeCaseWork />
    <CasesYourChallengeCaseArtifacts />
    <CasesYourChallengeCaseResults />
    <CasesYourChallengeCaseProblems />
    <CasesYourChallengeCaseConclusions />
  </div>
</template>

<style scoped>
.case-page {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-12);
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: var(--spacing-20);
}
</style>
