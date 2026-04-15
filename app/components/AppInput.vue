<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    modelValue: string
    label: string
    type?: 'text' | 'email' | 'password' | 'tel' | 'url'
    placeholder?: string
    id?: string
    name?: string
    error?: string
    disabled?: boolean
    prefix?: string
  }>(),
  {
    type: 'text',
    placeholder: '',
    id: undefined,
    name: undefined,
    error: '',
    disabled: false,
    prefix: undefined,
  },
)

const emit = defineEmits<{
  'update:modelValue': [value: string]
  blur: []
}>()

const errorId = computed(() => props.id ? `${props.id}-error` : undefined)

const updateValue = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}
</script>

<template>
  <label class="app-field">
    <span class="app-field__label">{{ label }}</span>
    <div v-if="prefix" class="app-control-wrap" :class="{ 'app-control-wrap--error': error }">
      <span class="app-control-wrap__prefix">{{ prefix }}</span>
      <input
        :id="id"
        class="app-control app-control--bare"
        :name="name"
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :aria-invalid="!!error"
        :aria-describedby="error ? errorId : undefined"
        @input="updateValue"
        @blur="emit('blur')"
      >
    </div>
    <input
      v-else
      :id="id"
      class="app-control"
      :class="{ 'app-control--error': error }"
      :name="name"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :aria-invalid="!!error"
      :aria-describedby="error ? errorId : undefined"
      @input="updateValue"
      @blur="emit('blur')"
    >
    <span v-if="error" :id="errorId" class="app-field__error">{{ error }}</span>
  </label>
</template>
