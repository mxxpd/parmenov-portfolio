<script setup lang="ts">
defineProps<{ isOpen: boolean }>()
defineEmits<{ toggle: [] }>()
</script>

<template>
  <button
    type="button"
    class="menu-btn"
    :class="{ 'menu-btn--open': isOpen }"
    :aria-expanded="isOpen"
    aria-label="Меню"
    @click="$emit('toggle')"
  >
    <span class="menu-btn__icon">
      <span class="bar" />
      <span class="bar" />
      <span class="bar" />
    </span>
  </button>
</template>
