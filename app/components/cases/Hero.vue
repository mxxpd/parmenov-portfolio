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
  <NuxtLink :to="`/cases/${slug}`" class="case-hero">
    <div class="case-hero__info">
      <div class="case-hero__top">
        <span class="case-tag">{{ type }}</span>
        <span class="case-hero__year">{{ year }}</span>
      </div>
      <div class="case-hero__bottom">
        <h2 class="case-hero__name">{{ title }}</h2>
        <p v-if="description" class="case-hero__desc">{{ description }}</p>
        <div class="case-hero__footer">
          <p class="case-hero__role">{{ role }}</p>
          <ArrowIcon class="case-hero__arrow" />
        </div>
      </div>
    </div>
    <div class="case-hero__cover-wrap">
      <div class="case-hero__cover" :style="coverStyle" />
    </div>
  </NuxtLink>
</template>
