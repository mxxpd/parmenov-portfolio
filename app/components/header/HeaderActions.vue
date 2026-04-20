<script setup lang="ts">
import ArrowDownIcon from '~/assets/icons/arrow-down.svg'

const { openContact } = useModal()
</script>

<template>
  <div class="header-actions">
    <AppButton label="Связаться со мной" size="md" :icon="true" @click="openContact" />
    <AppButton class="header-actions__cv" label="CV" variant="secondary" size="md" :icon="true" href="/Maxim_Parmenov_Resume.pdf" target="_blank">
      <template #icon>
        <ArrowDownIcon class="app-btn__icon" />
      </template>
    </AppButton>
  </div>
</template>
