<script setup lang="ts">
import CheckIcon from '~/assets/icons/check.svg'

type ContactField = 'name' | 'email' | 'topic' | 'message'
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
  topic: defaultTopic,
  message: '',
}

const form = reactive({ ...initialForm })
const touched = reactive<Record<ContactField, boolean>>({
  name: false,
  email: false,
  topic: false,
  message: false,
})

const submitState = ref<SubmitState>('default')
let submitTimer: ReturnType<typeof setTimeout> | undefined
let closeTimer: ReturnType<typeof setTimeout> | undefined

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const errors = computed(() => ({
  name: form.name.trim().length === 0
    ? 'Введите имя'
    : form.name.trim().length < 2
      ? 'Минимум 2 символа'
      : '',
  email: form.email.trim().length === 0
    ? 'Введите email'
    : !emailPattern.test(form.email.trim())
      ? 'Проверьте формат email'
      : '',
  topic: form.topic ? '' : 'Выберите тему',
  message: '',
}))

const isFormValid = computed(() => !errors.value.name && !errors.value.email && !errors.value.topic)
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

  if (submitTimer) {
    clearTimeout(submitTimer)
    submitTimer = undefined
  }

  if (closeTimer) {
    clearTimeout(closeTimer)
    closeTimer = undefined
  }
}

const handleSubmit = () => {
  if (!isFormValid.value || isSubmitting.value) {
    return
  }

  submitState.value = 'loading'

  submitTimer = setTimeout(() => {
    console.log({
      name: form.name.trim(),
      email: form.email.trim(),
      topic: form.topic,
      message: form.message.trim(),
    })

    submitState.value = 'success'

    closeTimer = setTimeout(() => {
      closeContact()
    }, 4000)
  }, 1500)
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
  if (submitTimer) {
    clearTimeout(submitTimer)
  }

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
