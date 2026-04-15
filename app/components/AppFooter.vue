<script setup lang="ts">
import SmsIcon from '~/assets/icons/sms.svg'
import TgIcon from '~/assets/icons/tg.svg'
import CheckIcon from '~/assets/icons/check.svg'

const copied = ref(false)
const emailBtnRef = ref<HTMLButtonElement | null>(null)
let copyTimer: ReturnType<typeof setTimeout> | undefined

const animateToState = async (newState: boolean) => {
  const btn = emailBtnRef.value
  if (!btn) { copied.value = newState; return }

  const startWidth = btn.offsetWidth
  btn.style.width = `${startWidth}px`

  copied.value = newState
  await nextTick()

  btn.style.width = 'auto'
  const endWidth = btn.offsetWidth
  btn.style.width = `${startWidth}px`
  btn.getBoundingClientRect()
  btn.style.width = `${endWidth}px`

  setTimeout(() => { if (btn) btn.style.width = '' }, 320)
}

const copyEmail = async () => {
  if (copied.value) return
  await navigator.clipboard.writeText('maxim.parm@gmail.com')
  await animateToState(true)

  copyTimer = setTimeout(() => animateToState(false), 2500)
}

onBeforeUnmount(() => {
  if (copyTimer) clearTimeout(copyTimer)
})
</script>

<template>
  <footer class="footer">
    <div class="footer__top">
      <HeaderLogo />

      <div class="footer__contacts">
        <button
          ref="emailBtnRef"
          class="app-btn app-btn--md app-btn--secondary app-btn--has-icon app-btn--icon-left footer__email-btn"
          type="button"
          @click="copyEmail"
        >
          <span class="app-btn__icon-wrap">
            <CheckIcon v-if="copied" class="app-btn__icon" />
            <SmsIcon v-else class="app-btn__icon footer__sms-icon" />
          </span>
          <span class="app-btn__label app-btn__label--with-icon">
            {{ copied ? 'Скопировано' : 'maxim.parm@gmail.com' }}
          </span>
        </button>

        <AppButton
          class="footer__tg-btn"
          label=""
          variant="secondary"
          size="md"
          :icon="true"
          href="https://t.me/mxxpd"
          target="_blank"
          aria-label="Telegram"
        >
          <template #icon>
            <TgIcon class="app-btn__icon" />
          </template>
        </AppButton>
      </div>
    </div>

    <div class="footer__bottom">
      <span class="footer__copy">Все права защищены © 2026 Максим Парменов</span>
      <NuxtLink to="/privacy" class="footer__link footer__link--muted">
        Политика конфиденциальности
      </NuxtLink>
    </div>
  </footer>
</template>
