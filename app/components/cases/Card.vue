<script setup lang="ts">
import ArrowIcon from '~/assets/icons/arrow-up-right.svg'

interface Props {
  slug: string
  title: string
  type: string
  description?: string
  role: string
  year: number
  coverFrom: string
  coverTo: string
  coverImage?: string
}

const props = defineProps<Props>()
const isLoading = ref(false)

const coverStyle = computed(() => ({
  background: `linear-gradient(145deg, ${props.coverFrom}, ${props.coverTo})`,
}))

const handleClick = (event: MouseEvent) => {
  if (
    event.defaultPrevented
    || event.button !== 0
    || event.metaKey
    || event.ctrlKey
    || event.shiftKey
    || event.altKey
  ) {
    return
  }

  isLoading.value = true
}
</script>

<template>
  <NuxtLink
    :to="`/cases/${slug}`"
    class="case-card"
    :class="{ 'case-card--loading': isLoading }"
    :aria-busy="isLoading"
    @click="handleClick"
  >
    <div class="case-card__cover-wrap">
      <img
        v-if="coverImage"
        :src="coverImage"
        alt=""
        class="case-card__cover case-card__cover-image"
        aria-hidden="true"
      >
      <div v-else class="case-card__cover" :style="coverStyle" />
      <AppTag class="case-card__tag" size="s" variant="brand" appearance="tonal">{{ type }}</AppTag>
    </div>
    <div class="case-card__info">
      <div class="case-card__body">
        <h3 class="case-card__name">{{ title }}</h3>
        <p v-if="description" class="case-card__desc">{{ description }}</p>
      </div>
      <div class="case-meta">
        <span>{{ role }}</span>
        <span aria-hidden="true">·</span>
        <span>{{ year }}</span>
      </div>
      <ArrowIcon class="case-arrow" />
      <span v-if="isLoading" class="case-card__loader" aria-live="polite">
        <span class="case-card__loader-dot" aria-hidden="true" />
        Открываю
      </span>
    </div>
  </NuxtLink>
</template>
