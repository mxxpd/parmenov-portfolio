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

const coverStyle = computed(() => ({
  background: `linear-gradient(145deg, ${props.coverFrom}, ${props.coverTo})`,
}))
</script>

<template>
  <NuxtLink :to="`/cases/${slug}`" class="case-card">
    <div class="case-card__cover-wrap">
      <div class="case-card__cover" :style="coverStyle" />
      <span class="case-tag">{{ type }}</span>
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
    </div>
  </NuxtLink>
</template>
