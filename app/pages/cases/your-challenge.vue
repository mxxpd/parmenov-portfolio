<script setup lang="ts">
useSeoMeta({
  title: 'Your Challenge — Парменов',
  description: 'Как я перезапустил skill-based gaming platform и вырастил базу пользователей в 13 раз за 2 месяца.',
  ogTitle: 'Your Challenge — Парменов',
  ogLocale: 'ru_RU',
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
