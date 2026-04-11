<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    modelValue: string
    label: string
    placeholder?: string
    id?: string
    name?: string
    error?: string
    disabled?: boolean
    rows?: number
    minHeight?: number
    maxHeight?: number
  }>(),
  {
    placeholder: '',
    id: undefined,
    name: undefined,
    error: '',
    disabled: false,
    rows: 4,
    minHeight: 136,
    maxHeight: 272,
  },
)

const emit = defineEmits<{
  'update:modelValue': [value: string]
  blur: []
}>()

const textareaRef = ref<HTMLTextAreaElement | null>(null)
const errorId = computed(() => props.id ? `${props.id}-error` : undefined)

const resize = () => {
  const element = textareaRef.value

  if (!element) {
    return
  }

  const currentHeight = element.offsetHeight || props.minHeight

  element.style.height = 'auto'

  const nextHeight = Math.min(Math.max(element.scrollHeight, props.minHeight), props.maxHeight)
  const hasOverflow = element.scrollHeight > props.maxHeight

  element.style.height = `${currentHeight}px`
  element.style.overflowY = hasOverflow ? 'auto' : 'hidden'

  requestAnimationFrame(() => {
    element.style.height = `${nextHeight}px`
  })
}

const updateValue = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLTextAreaElement).value)
  resize()
}

watch(() => props.modelValue, () => {
  nextTick(resize)
})

onMounted(() => {
  resize()
})
</script>

<template>
  <label class="app-field">
    <span class="app-field__label">{{ label }}</span>
    <textarea
      :id="id"
      ref="textareaRef"
      class="app-control app-textarea"
      :class="{ 'app-control--error': error }"
      :name="name"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :rows="rows"
      :aria-invalid="!!error"
      :aria-describedby="error ? errorId : undefined"
      @input="updateValue"
      @blur="emit('blur')"
    />
    <span v-if="error" :id="errorId" class="app-field__error">{{ error }}</span>
  </label>
</template>
