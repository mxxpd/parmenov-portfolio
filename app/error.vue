<script setup lang="ts">
import type { NuxtError } from "#app";
import LogoIcon from "~/assets/icons/logo.svg";

const props = defineProps<{
  error: NuxtError;
}>();

useHead({
  htmlAttrs: { lang: "ru" },
  title: "404 — Страница не найдена",
});

const is404 = computed(() => props.error.statusCode === 404);

type Phase = "broken" | "fixing" | "fixed";
const phase = ref<Phase>("broken");
const showIndicator = ref(false);
const alOn = ref(false);

onMounted(() => {
  if (!is404.value) return;

  setTimeout(() => {
    showIndicator.value = true;
  }, 500);
  setTimeout(() => {
    alOn.value = true;
  }, 1300);
  setTimeout(() => {
    phase.value = "fixing";
  }, 1700);
  setTimeout(() => {
    phase.value = "fixed";
    setTimeout(() => {
      showIndicator.value = false;
    }, 600);
  }, 2500);
});

const isMobile = ref(false);

onMounted(() => {
  isMobile.value = window.innerWidth < 640;
});

const BROKEN_DIGITS_DESKTOP = [
  "translate(-52px, -18px) rotate(-9deg)",
  "translate(36px, 28px) rotate(6deg)",
  "translate(-6px, -44px) rotate(13deg)",
];

const BROKEN_DIGITS_MOBILE = [
  "translate(-28px, -12px) rotate(-8deg)",
  "translate(20px, 16px) rotate(5deg)",
  "translate(-4px, -26px) rotate(11deg)",
];

const SPRING = "cubic-bezier(0.34, 1.56, 0.64, 1)";
const DUR = "0.72s";

function digitStyle(i: number): Record<string, string> {
  if (phase.value === "broken") {
    const set = isMobile.value ? BROKEN_DIGITS_MOBILE : BROKEN_DIGITS_DESKTOP;
    return { transform: set[i] ?? "translate(0,0) rotate(0deg)" };
  }

  return {
    transform: "translate(0,0) rotate(0deg)",
    transition: `transform ${DUR} ${SPRING} ${i * 60}ms`,
  };
}

const subtitleStyle = computed<Record<string, string>>(() => {
  if (phase.value === "broken") {
    const x = isMobile.value ? "28px" : "52px";
    return {
      transform: `translate(${x}, 6px) rotate(-4deg)`,
      transition: "none",
    };
  }

  return {
    transform: "translate(0,0) rotate(0deg)",
    transition: `transform ${DUR} ${SPRING} 100ms`,
  };
});

const ctaStyle = computed<Record<string, string>>(() => {
  if (phase.value === "broken") {
    const x = isMobile.value ? "-24px" : "-40px";
    return {
      transform: `translate(${x}, 32px) rotate(3deg)`,
      opacity: "0.3",
      pointerEvents: "none",
      transition: "none",
    };
  }

  return {
    transform: "translate(0,0) rotate(0deg)",
    opacity: "1",
    transition: `transform ${DUR} ${SPRING} 160ms, opacity 0.5s ease 200ms`,
    pointerEvents: "auto",
  };
});
</script>

<template>
  <div class="error-page">
    <NuxtLink to="/" class="error-logo">
      <LogoIcon class="error-logo__icon" />
      Парменов
    </NuxtLink>

    <main class="error-main">
      <div class="al-badge-anchor">
        <Transition name="badge">
          <div v-if="showIndicator && is404" class="al-badge">
            Auto layout
            <div class="al-toggle" :class="{ 'al-toggle--on': alOn }">
              <span class="al-toggle__thumb" />
            </div>
          </div>
        </Transition>
      </div>

      <template v-if="is404">
        <div class="error-block">
          <div class="error-digits" aria-label="404">
            <span
              v-for="(char, i) in ['4', '0', '4']"
              :key="i"
              class="error-digit"
              aria-hidden="true"
              :style="digitStyle(i)"
              >{{ char }}</span
            >
          </div>

          <p class="error-subtitle" :style="subtitleStyle">
            Страница потерялась. Лейаут — нет.
          </p>

          <div class="error-cta" :style="ctaStyle">
            <AppButton
              label="Вернуться на главную"
              variant="primary"
              size="md"
              href="/"
            />
          </div>
        </div>
      </template>

      <template v-else>
        <div class="error-block">
          <p class="error-code-generic">{{ error.statusCode }}</p>
          <p class="error-subtitle">
            {{ error.statusMessage || "Что-то пошло не так" }}
          </p>
          <AppButton label="На главную" variant="primary" href="/" />
        </div>
      </template>
    </main>
  </div>
</template>
