<script setup lang="ts">
import CheckIcon from '~/assets/icons/check.svg'

type ContactField = 'name' | 'email' | 'telegram' | 'topic' | 'message' | 'privacy'
type SubmitState = 'default' | 'loading' | 'success'

const topics = [
  'Предложение о работе',
  'Фриланс',
  'Коллаборация',
  'Просто поговорить',
]
const defaultTopic = topics[0] ?? ''

const { isContactOpen, closeContact } = useModal()
const emit = defineEmits<{
  successChange: [isSuccess: boolean]
}>()

const initialForm = {
  name: '',
  email: '',
  telegram: '',
  topic: defaultTopic,
  message: '',
  privacy: false,
}

const form = reactive({ ...initialForm })
const touched = reactive<Record<ContactField | 'privacy', boolean>>({
  name: false,
  email: false,
  telegram: false,
  topic: false,
  message: false,
  privacy: false,
})

const submitState = ref<SubmitState>('default')
let closeTimer: ReturnType<typeof setTimeout> | undefined

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const normalizeTelegram = (value: string): string => {
  return value
    .trim()
    .replace(/^https?:\/\//i, '')
    .replace(/^t\.me\//i, '')
    .replace(/^@/, '')
}

watch(() => form.telegram, (value) => {
  const normalized = normalizeTelegram(value)
  if (normalized !== value) {
    form.telegram = normalized
  }
})

const hasContact = computed(() => form.email.trim().length > 0 || form.telegram.trim().length > 0)

const errors = computed(() => ({
  name: form.name.trim().length === 0
    ? 'Введите имя'
    : form.name.trim().length < 2
      ? 'Минимум 2 символа'
      : '',
  email: form.email.trim().length > 0 && !emailPattern.test(form.email.trim())
    ? 'Проверьте формат email'
    : '',
  contact: !hasContact.value ? 'Укажите email или Telegram — хотя бы одно' : '',
  topic: form.topic ? '' : 'Выберите тему',
  message: '',
}))

const showContactError = computed(() => (touched.email || touched.telegram) && !hasContact.value)

const isFormValid = computed(() =>
  !errors.value.name
  && !errors.value.email
  && hasContact.value
  && !errors.value.topic
  && form.privacy,
)
const isSubmitting = computed(() => submitState.value === 'loading')
const isSuccess = computed(() => submitState.value === 'success')
const submitLabel = computed(() => isSubmitting.value ? 'Отправляю...' : 'Отправить сообщение')

const markTouched = (field: ContactField) => {
  touched[field] = true
}

const resetForm = () => {
  Object.assign(form, initialForm)
  Object.keys(touched).forEach((field) => {
    touched[field as ContactField] = false
  })

  submitState.value = 'default'

  if (closeTimer) {
    clearTimeout(closeTimer)
    closeTimer = undefined
  }
}

const handleSubmit = async () => {
  if (!isFormValid.value || isSubmitting.value) {
    return
  }

  submitState.value = 'loading'

  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: {
        name: form.name.trim(),
        email: form.email.trim(),
        telegram: form.telegram.trim(),
        topic: form.topic,
        message: form.message.trim(),
      },
    })

    submitState.value = 'success'

    closeTimer = setTimeout(() => {
      closeContact()
    }, 4000)
  }
  catch {
    submitState.value = 'default'
  }
}

watch(isContactOpen, (isOpen) => {
  if (!isOpen) {
    resetForm()
  }
})

watch(isSuccess, (value) => {
  emit('successChange', value)
})

onBeforeUnmount(() => {
  if (closeTimer) {
    clearTimeout(closeTimer)
  }
})
</script>

<template>
  <div v-if="isSuccess" class="contact-success">
    <div class="contact-success__icon" aria-hidden="true">
      <CheckIcon class="contact-success__icon-svg" />
    </div>
    <div class="contact-success__body">
      <h3 id="contact-success-title" class="contact-success__title">Сообщение отправлено!</h3>
      <p id="contact-success-description" class="contact-success__text">Отвечу в течение 24 часов.</p>
    </div>
    <AppButton class="contact-success__button" label="Закрыть" size="lg" @click="closeContact" />
  </div>

  <form v-else class="contact-form" novalidate @submit.prevent="handleSubmit">
    <AppInput
      id="contact-name"
      v-model="form.name"
      class="contact-form__field--wide"
      label="Имя"
      placeholder="Как вас зовут?"
      :error="touched.name ? errors.name : ''"
      :disabled="isSubmitting"
      @blur="markTouched('name')"
    />

    <AppInput
      id="contact-email"
      v-model="form.email"
      label="Email"
      type="email"
      placeholder="your@email.com"
      :error="touched.email ? errors.email : ''"
      :disabled="isSubmitting"
      @blur="markTouched('email')"
    />

    <AppInput
      id="contact-telegram"
      v-model="form.telegram"
      label="Telegram"
      placeholder="username"
      prefix="t.me/"
      :disabled="isSubmitting"
      @blur="markTouched('telegram')"
    />

    <p v-if="showContactError" class="contact-form__contact-error">
      {{ errors.contact }}
    </p>

    <AppSelect
      id="contact-topic"
      v-model="form.topic"
      class="contact-form__field--wide"
      name="topic"
      label="Тема"
      :options="topics"
      :error="touched.topic ? errors.topic : ''"
      :disabled="isSubmitting"
      @blur="markTouched('topic')"
    />

    <AppTextarea
      id="contact-message"
      v-model="form.message"
      class="contact-form__field--wide"
      label="Сообщение"
      placeholder="Расскажите немного о вашем запросе"
      :disabled="isSubmitting"
      @blur="markTouched('message')"
    />

    <AppCheckbox
      id="contact-privacy"
      v-model="form.privacy"
      class="contact-form__field--wide"
      :disabled="isSubmitting"
    >
      <template #default>
        Я согласен с <NuxtLink to="/privacy" class="contact-form__privacy-link" target="_blank">политикой конфиденциальности</NuxtLink>
      </template>
    </AppCheckbox>

    <AppButton
      class="contact-form__submit"
      :label="submitLabel"
      size="lg"
      native-type="submit"
      :disabled="!isFormValid"
      :loading="isSubmitting"
    />
  </form>
</template>
