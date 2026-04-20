<script setup lang="ts">
import ArrowIcon from '~/assets/icons/arrow-up-right.svg'

interface Props {
  slug: string
  category: string
  title: string
  description: string
  meta: string
  coverImage?: string
  coverFrom: string
  coverTo: string
}

const props = defineProps<Props>()

const coverStyle = computed(() => ({
  background: `linear-gradient(145deg, ${props.coverFrom}, ${props.coverTo})`,
}))
</script>

<template>
  <NuxtLink :to="`/services/${slug}`" class="case-card">
    <div class="case-card__cover-wrap">
      <img
        v-if="coverImage"
        class="case-card__cover case-card__cover-image"
        :src="coverImage"
        alt=""
        loading="lazy"
        decoding="async"
      >
      <div v-else class="case-card__cover" :style="coverStyle" />
      <AppTag class="case-card__tag" size="s" variant="brand" appearance="tonal">{{ category }}</AppTag>
    </div>
    <div class="case-card__info">
      <div class="case-card__body">
        <h3 class="case-card__name">{{ title }}</h3>
        <p class="case-card__desc">{{ description }}</p>
      </div>
      <div class="case-meta">
        <span>{{ meta }}</span>
      </div>
      <ArrowIcon class="case-arrow" />
    </div>
  </NuxtLink>
</template>
