<script setup lang="ts">
const { isContactOpen, closeContact } = useModal()
const isContactSuccess = ref(false)
const dialogRef = ref<HTMLElement | null>(null)
let triggerElement: HTMLElement | null = null

const focusableSelector = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled]):not([type="hidden"])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',')

const getFocusableElements = () => {
  if (!dialogRef.value) {
    return []
  }

  return Array.from(dialogRef.value.querySelectorAll<HTMLElement>(focusableSelector))
    .filter(element => !element.hasAttribute('aria-hidden') && element.offsetParent !== null)
}

const focusInitialField = () => {
  const initialField = dialogRef.value?.querySelector<HTMLElement>(
    'input:not([disabled]):not([type="hidden"]), textarea:not([disabled]), button[aria-haspopup="listbox"]:not([disabled])',
  )

  initialField?.focus()
}

const focusFirstAvailable = () => {
  getFocusableElements()[0]?.focus()
}

const restoreTriggerFocus = () => {
  if (triggerElement?.isConnected) {
    triggerElement.focus()
  }

  triggerElement = null
}

const trapFocus = (event: KeyboardEvent) => {
  const focusableElements = getFocusableElements()

  if (!focusableElements.length) {
    event.preventDefault()
    return
  }

  const firstElement = focusableElements[0]
  const lastElement = focusableElements[focusableElements.length - 1]
  const activeElement = document.activeElement

  if (!dialogRef.value?.contains(activeElement)) {
    event.preventDefault()
    firstElement?.focus()
    return
  }

  if (event.shiftKey && activeElement === firstElement) {
    event.preventDefault()
    lastElement?.focus()
    return
  }

  if (!event.shiftKey && activeElement === lastElement) {
    event.preventDefault()
    firstElement?.focus()
  }
}

const handleDialogKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    event.preventDefault()
    closeContact()
    return
  }

  if (event.key === 'Tab') {
    trapFocus(event)
  }
}

watch(isContactOpen, (isOpen) => {
  if (!import.meta.client) {
    return
  }

  if (!isOpen) {
    isContactSuccess.value = false
  }

  document.body.classList.toggle('contact-modal-open', isOpen)

  if (isOpen) {
    triggerElement = document.activeElement instanceof HTMLElement ? document.activeElement : null

    nextTick(() => {
      requestAnimationFrame(focusInitialField)
    })

    return
  }

  restoreTriggerFocus()
})

watch(isContactSuccess, (isSuccess) => {
  if (isSuccess) {
    nextTick(() => {
      requestAnimationFrame(focusFirstAvailable)
    })
  }
})

onBeforeUnmount(() => {
  if (!import.meta.client) {
    return
  }

  document.body.classList.remove('contact-modal-open')
})
</script>

<template>
  <Teleport to="body">
    <Transition name="contact-modal">
      <div v-if="isContactOpen" class="contact-modal" role="presentation" @click.self="closeContact">
        <section
          ref="dialogRef"
          class="contact-modal__dialog"
          role="dialog"
          aria-modal="true"
          :aria-labelledby="isContactSuccess ? 'contact-success-title' : 'contact-modal-title'"
          :aria-describedby="isContactSuccess ? 'contact-success-description' : 'contact-modal-description'"
          @keydown="handleDialogKeydown"
        >
          <button class="contact-modal__close" type="button" aria-label="Закрыть окно" @click="closeContact">
            ×
          </button>

          <div v-if="!isContactSuccess" class="contact-modal__header">
            <h2 id="contact-modal-title" class="contact-modal__title">Давайте пообщаемся</h2>
            <p id="contact-modal-description" class="contact-modal__description">
              Отвечаю в течение 24 часов
            </p>
          </div>

          <ContactForm @success-change="isContactSuccess = $event" />
        </section>
      </div>
    </Transition>
  </Teleport>
</template>
