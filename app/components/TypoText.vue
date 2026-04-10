<script setup lang="ts">
const props = defineProps<{
  text: string
  tag?: string
  className?: string
}>()

const typo = useTypograf()

const formattedText = computed(() => typo(props.text))
</script>

<template>
  <component :is="tag || 'span'" :class="className">{{ formattedText }}</component>
</template>
