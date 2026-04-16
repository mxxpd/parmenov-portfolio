<script setup lang="ts">
const visible = ref(false)

onMounted(() => {
  if (!localStorage.getItem('cookie-accepted')) {
    visible.value = true
  }
})

const accept = () => {
  localStorage.setItem('cookie-accepted', '1')
  visible.value = false
}
</script>

<template>
  <Transition name="cookie-banner">
    <div v-if="visible" class="cookie-banner" role="dialog" aria-label="Уведомление о cookies">
      <p class="cookie-banner__text">
        Cookies помогают нам понять, что тебе здесь реально нужно.
      </p>
      <AppButton label="Понятно" variant="secondary" size="sm" @click="accept" />
    </div>
  </Transition>
</template>
