<script setup lang="ts">
withDefaults(defineProps<{
  label: string
  height?: number
}>(), {
  height: 280,
})
</script>

<template>
  <div
    class="placeholder"
    :style="`min-height: ${height}px`"
    role="img"
    :aria-label="label"
  >
    <svg class="placeholder__icon" width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="2" y="6" width="28" height="20" rx="3" stroke="currentColor" stroke-width="1.5" />
      <circle cx="11" cy="13" r="2.5" stroke="currentColor" stroke-width="1.5" />
      <path d="M2 22l7-6 5 4 4-3 10 9" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
    </svg>
    <p class="placeholder__label">{{ label }}</p>
  </div>
</template>

<style scoped>
.placeholder {
  width: 100%;
  border-radius: var(--radius-lg);
  border: 1.5px dashed var(--color-border-default);
  background: var(--color-bg-surface-muted);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-3);
  padding: var(--spacing-8);
  text-align: center;
  color: var(--color-text-tertiary);
}

.placeholder__label {
  font-size: var(--text-body-sm);
  line-height: var(--line-height-body);
  max-width: 320px;
}
</style>
