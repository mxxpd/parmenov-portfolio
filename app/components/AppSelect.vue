<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    modelValue: string
    label: string
    options: string[]
    id?: string
    name?: string
    error?: string
    disabled?: boolean
  }>(),
  {
    id: undefined,
    name: undefined,
    error: '',
    disabled: false,
  },
)

const emit = defineEmits<{
  'update:modelValue': [value: string]
  blur: []
}>()

const isOpen = ref(false)
const rootRef = ref<HTMLElement | null>(null)
const labelId = computed(() => props.id ? `${props.id}-label` : undefined)
const valueId = computed(() => props.id ? `${props.id}-value-label` : undefined)
const errorId = computed(() => props.id ? `${props.id}-error` : undefined)

const close = () => {
  isOpen.value = false
}

const toggle = () => {
  if (!props.disabled) {
    isOpen.value = !isOpen.value
  }
}

const selectOption = (option: string) => {
  emit('update:modelValue', option)
  emit('blur')
  close()
}

const handleDocumentClick = (event: MouseEvent) => {
  if (!rootRef.value?.contains(event.target as Node)) {
    close()
  }
}

const handleFocusout = (event: FocusEvent) => {
  const nextTarget = event.relatedTarget as Node | null

  if (!rootRef.value?.contains(nextTarget)) {
    emit('blur')
    close()
  }
}

onMounted(() => {
  document.addEventListener('click', handleDocumentClick)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleDocumentClick)
})
</script>

<template>
  <div ref="rootRef" class="app-field" @focusout="handleFocusout" @keydown.esc.stop.prevent="close">
    <span :id="labelId" class="app-field__label">{{ label }}</span>
    <div class="app-select">
      <button
        :id="id"
        class="app-control app-select__button"
        :class="{ 'app-control--error': error }"
        type="button"
        aria-haspopup="listbox"
        :aria-labelledby="labelId && valueId ? `${labelId} ${valueId}` : undefined"
        :aria-expanded="isOpen"
        :aria-invalid="!!error"
        :aria-describedby="error ? errorId : undefined"
        :disabled="disabled"
        @click="toggle"
      >
        <span :id="valueId">{{ modelValue }}</span>
        <span class="app-select__icon" aria-hidden="true" />
      </button>

      <Transition name="app-select-menu">
        <div v-if="isOpen" class="app-select__menu" role="listbox">
          <button
            v-for="option in options"
            :key="option"
            class="app-select__option"
            :class="{ 'app-select__option--active': option === modelValue }"
            type="button"
            role="option"
            :aria-selected="option === modelValue"
            @click="selectOption(option)"
          >
            {{ option }}
          </button>
        </div>
      </Transition>

      <input :id="id ? `${id}-value` : undefined" type="hidden" :name="name" :value="modelValue">
    </div>
    <span v-if="error" :id="errorId" class="app-field__error">{{ error }}</span>
  </div>
</template>
