<template>
  <component :is="tag || 'span'" :class="className">{{ text }}</component>
</template>

<script setup lang="ts">
defineProps<{
  text: string
  tag?: string
  className?: string
}>()
</script>
