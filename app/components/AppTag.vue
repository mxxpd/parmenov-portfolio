<script setup lang="ts">
withDefaults(
  defineProps<{
    size?: 's' | 'm'
    variant?: 'brand' | 'warning' | 'error' | 'success'
    appearance?: 'tonal' | 'fill'
  }>(),
  {
    size: 'm',
    variant: 'brand',
    appearance: 'tonal',
  },
)
</script>

<template>
  <span
    class="app-tag"
    :class="[
      `app-tag--${size}`,
      `app-tag--${variant}`,
      `app-tag--${appearance}`,
    ]"
  >
    <slot />
  </span>
</template>
