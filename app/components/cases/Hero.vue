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
    class="case-hero"
    :class="{ 'case-hero--loading': isLoading }"
    :aria-busy="isLoading"
    @click="handleClick"
  >
    <div class="case-hero__info">
      <div class="case-hero__top">
        <AppTag class="case-hero__tag" size="s" variant="brand" appearance="tonal">{{ type }}</AppTag>
        <span class="case-hero__year">{{ year }}</span>
      </div>
      <div class="case-hero__bottom">
        <h2 class="case-hero__name">{{ title }}</h2>
        <p v-if="description" class="case-hero__desc">{{ description }}</p>
        <div class="case-hero__footer">
          <p class="case-hero__role">{{ role }}</p>
          <ArrowIcon class="case-hero__arrow" />
          <span v-if="isLoading" class="case-hero__loader" aria-live="polite">
            <span class="case-hero__loader-dot" aria-hidden="true" />
            Открываю
          </span>
        </div>
      </div>
    </div>
    <div class="case-hero__cover-wrap">
      <div class="case-hero__cover" :style="coverStyle" />
    </div>
  </NuxtLink>
</template>
