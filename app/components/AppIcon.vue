<template>
  <span
    class="app-icon"
    :class="`app-icon--${name}`"
    :data-icon="name"
    :aria-hidden="decorative ? 'true' : undefined"
    :role="decorative ? undefined : 'img'"
    :aria-label="decorative ? undefined : label || name"
  >
    {{ placeholder }}
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    name: string
    label?: string
    decorative?: boolean
  }>(),
  {
    label: '',
    decorative: true,
  },
)

const placeholders: Record<string, string> = {
  home: 'H',
  services: 'S',
  pricing: 'P',
  features: 'F',
  arrow: '->',
  signal: '...',
  wifi: 'Wi',
  battery: 'B',
  deposit: '+',
  withdraw: '-',
  topup: '+',
  send: '->',
  apple: 'A',
  android: 'An',
}

const placeholder = computed(() => placeholders[props.name] ?? props.name.slice(0, 2).toUpperCase())
</script>

<style scoped>
.app-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  font-size: inherit;
  font-weight: 700;
  user-select: none;
}
</style>
