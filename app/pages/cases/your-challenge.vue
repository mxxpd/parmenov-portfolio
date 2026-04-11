<script setup lang="ts">
const { getCaseBySlug } = useCases();
const caseEntry = getCaseBySlug("your-challenge");
const readingProgress = ref(0);

const updateReadingProgress = () => {
  const root = document.documentElement;
  const scrollable = root.scrollHeight - window.innerHeight;

  readingProgress.value =
    scrollable > 0
      ? Math.min(
          100,
          Math.max(0, Math.round((window.scrollY / scrollable) * 100)),
        )
      : 0;
};

if (!caseEntry) {
  throw createError({
    statusCode: 404,
    statusMessage: "Case not found",
  });
}

useSeoMeta({
  title: caseEntry.seo.title,
  description: caseEntry.seo.description,
  ogTitle: caseEntry.seo.title,
  ogLocale: "ru_RU",
  robots: caseEntry.seo.robots,
});

onMounted(() => {
  updateReadingProgress();
  window.addEventListener("scroll", updateReadingProgress, { passive: true });
  window.addEventListener("resize", updateReadingProgress);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", updateReadingProgress);
  window.removeEventListener("resize", updateReadingProgress);
});
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
