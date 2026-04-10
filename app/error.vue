<script setup lang="ts">
import type { NuxtError } from '#app'
import LogoIcon from '~/assets/icons/logo.svg'

const props = defineProps<{
  error: NuxtError
}>()

useHead({
  htmlAttrs: { lang: 'ru' },
  title: '404 — Страница не найдена',
})

const is404 = computed(() => props.error.statusCode === 404)

type Phase = 'broken' | 'fixing' | 'fixed'
const phase = ref<Phase>('broken')
const showIndicator = ref(false)
const alOn = ref(false)

onMounted(() => {
  if (!is404.value) return

  setTimeout(() => { showIndicator.value = true }, 500)
  setTimeout(() => { alOn.value = true }, 1300)
  setTimeout(() => { phase.value = 'fixing' }, 1700)
  setTimeout(() => {
    phase.value = 'fixed'
    setTimeout(() => { showIndicator.value = false }, 600)
  }, 2500)
})

const isMobile = ref(false)

onMounted(() => {
  isMobile.value = window.innerWidth < 640
})

const BROKEN_DIGITS_DESKTOP = [
  'translate(-52px, -18px) rotate(-9deg)',
  'translate(36px, 28px) rotate(6deg)',
  'translate(-6px, -44px) rotate(13deg)',
]

const BROKEN_DIGITS_MOBILE = [
  'translate(-28px, -12px) rotate(-8deg)',
  'translate(20px, 16px) rotate(5deg)',
  'translate(-4px, -26px) rotate(11deg)',
]

const SPRING = 'cubic-bezier(0.34, 1.56, 0.64, 1)'
const DUR = '0.72s'

function digitStyle(i: number): Record<string, string> {
  if (phase.value === 'broken') {
    const set = isMobile.value ? BROKEN_DIGITS_MOBILE : BROKEN_DIGITS_DESKTOP
    return { transform: set[i] ?? 'translate(0,0) rotate(0deg)' }
  }

  return {
    transform: 'translate(0,0) rotate(0deg)',
    transition: `transform ${DUR} ${SPRING} ${i * 60}ms`,
  }
}

const subtitleStyle = computed<Record<string, string>>(() => {
  if (phase.value === 'broken') {
    const x = isMobile.value ? '28px' : '52px'
    return {
      transform: `translate(${x}, 6px) rotate(-4deg)`,
      transition: 'none',
    }
  }

  return {
    transform: 'translate(0,0) rotate(0deg)',
    transition: `transform ${DUR} ${SPRING} 100ms`,
  }
})

const ctaStyle = computed<Record<string, string>>(() => {
  if (phase.value === 'broken') {
    const x = isMobile.value ? '-24px' : '-40px'
    return {
      transform: `translate(${x}, 32px) rotate(3deg)`,
      opacity: '0.3',
      pointerEvents: 'none',
      transition: 'none',
    }
  }

  return {
    transform: 'translate(0,0) rotate(0deg)',
    opacity: '1',
    transition: `transform ${DUR} ${SPRING} 160ms, opacity 0.5s ease 200ms`,
    pointerEvents: 'auto',
  }
})
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
            >{{ char }}</span>
          </div>

          <p class="error-subtitle" :style="subtitleStyle">
            Страница потерялась. Лейаут — нет.
          </p>

          <div class="error-cta" :style="ctaStyle">
            <AppButton label="Вернуться на главную" variant="primary" size="md" href="/" />
          </div>
        </div>
      </template>

      <template v-else>
        <div class="error-block">
          <p class="error-code-generic">{{ error.statusCode }}</p>
          <p class="error-subtitle">{{ error.statusMessage || 'Что-то пошло не так' }}</p>
          <AppButton label="На главную" variant="primary" href="/" />
        </div>
      </template>
    </main>
  </div>
</template>

<style scoped>
.error-page {
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  background: var(--color-bg-canvas);
  color: var(--color-text-primary);
  padding: var(--spacing-6);
  overflow: clip;
}

.error-logo {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-2);
  color: var(--color-text-primary);
  font-size: var(--text-body-sm);
  font-weight: var(--font-weight-heading);
  width: fit-content;
}

.error-logo__icon {
  width: 28px;
  height: 28px;
  border-radius: var(--radius-sm);
}

.error-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}

.al-badge-anchor {
  position: absolute;
  top: var(--spacing-8);
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
}

.al-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-2);
  padding: 4px 4px 4px var(--spacing-3);
  border-radius: var(--radius-pill);
  background: var(--color-bg-surface);
  border: 1px solid var(--color-border-default);
  font-size: var(--text-caption);
  color: var(--color-text-secondary);
  box-shadow: var(--shadow-subtle);
}

.al-toggle {
  width: 44px;
  height: 26px;
  border-radius: var(--radius-pill);
  background: var(--primitive-color-ink-300);
  position: relative;
  flex-shrink: 0;
  transition: background 0.3s ease;
}

.al-toggle--on {
  background: #62c06a;
}

.al-toggle::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 8px;
  transform: translateY(-50%);
  width: 2px;
  height: 10px;
  border-radius: 1px;
  background: rgba(255, 255, 255, 0.82);
}

.al-toggle__thumb {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 22px;
  height: 20px;
  border-radius: var(--radius-pill);
  background: var(--primitive-color-ink-0);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.22), 0 0 0 0.5px rgba(0, 0, 0, 0.06);
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  z-index: 1;
}

.al-toggle--on .al-toggle__thumb {
  transform: translateX(16px);
}

.badge-enter-active,
.badge-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.badge-enter-from,
.badge-leave-to {
  opacity: 0;
  transform: translateY(-8px) scale(0.95);
}

.error-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-6);
  text-align: center;
}

.error-digits {
  display: flex;
  align-items: center;
  gap: 0;
  line-height: 1;
}

.error-digit {
  display: inline-block;
  font-size: clamp(72px, 20vw, 160px);
  font-weight: var(--font-weight-display);
  color: var(--color-text-primary);
  line-height: var(--line-height-display);
  will-change: transform;
  user-select: none;
}

.error-subtitle {
  font-size: var(--text-body);
  color: var(--color-text-secondary);
  line-height: var(--line-height-body-relaxed);
  max-width: 340px;
  display: inline-block;
  will-change: transform;
}

.error-cta {
  will-change: transform, opacity;
}

.error-code-generic {
  font-size: clamp(64px, 12vw, 120px);
  font-weight: var(--font-weight-display);
  color: var(--color-text-primary);
  line-height: var(--line-height-display);
}

@media (max-width: 640px) {
  .error-page {
    padding: var(--spacing-3);
  }

  .error-block {
    gap: var(--spacing-4);
  }

  .error-subtitle {
    font-size: var(--text-body-sm);
    max-width: 280px;
  }

  .al-badge-anchor {
    top: var(--spacing-4);
  }
}
</style>
