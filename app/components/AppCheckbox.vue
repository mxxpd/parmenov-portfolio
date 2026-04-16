<script setup lang="ts">
const props = defineProps<{
  id: string
  modelValue: boolean
  label?: string
  error?: string
  disabled?: boolean
}>()

defineEmits<{
  'update:modelValue': [value: boolean]
}>()
</script>

<template>
  <div class="app-checkbox" :class="{ 'app-checkbox--error': error, 'app-checkbox--disabled': disabled }">
    <label class="app-checkbox__label" :for="id">
      <input
        :id="id"
        class="app-checkbox__input"
        type="checkbox"
        :checked="modelValue"
        :disabled="disabled"
        :aria-describedby="error ? `${id}-error` : undefined"
        @change="$emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
      >
      <span class="app-checkbox__box" aria-hidden="true">
        <svg class="app-checkbox__check" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 4L3.5 6.5L9 1" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </span>
      <span class="app-checkbox__text"><slot>{{ label }}</slot></span>
    </label>
    <p v-if="error" :id="`${id}-error`" class="app-checkbox__error">{{ error }}</p>
  </div>
</template>
