<script setup lang="ts">
export interface ImageSliderSlide {
  src: string
  alt: string
}

const props = withDefaults(defineProps<{
  slides: ImageSliderSlide[]
  placeholderLabel?: string
  placeholderHeight?: number
  ariaLabel?: string
}>(), {
  placeholderLabel: 'Изображение скоро появится',
  placeholderHeight: 640,
  ariaLabel: 'Галерея изображений',
})

const slideIndex = ref(0)
const slideDirection = ref<'next' | 'prev'>('next')
const lightboxOpen = ref(false)

let previousBodyOverflow = ''

const currentSlide = computed(() => props.slides[slideIndex.value] ?? null)
const hasSlider = computed(() => props.slides.length > 1)

watch(() => props.slides, () => {
  slideIndex.value = 0
  closeLightbox()
})

watch(lightboxOpen, (isOpen) => {
  if (isOpen) {
    previousBodyOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeydown)
  }
  else {
    document.body.style.overflow = previousBodyOverflow
    window.removeEventListener('keydown', onKeydown)
  }
})

onBeforeUnmount(() => {
  if (lightboxOpen.value) document.body.style.overflow = previousBodyOverflow

  window.removeEventListener('keydown', onKeydown)
})

function prev() {
  if (!props.slides.length) return

  slideDirection.value = 'prev'
  slideIndex.value = (slideIndex.value - 1 + props.slides.length) % props.slides.length
}

function next() {
  if (!props.slides.length) return

  slideDirection.value = 'next'
  slideIndex.value = (slideIndex.value + 1) % props.slides.length
}

function goTo(index: number) {
  if (index === slideIndex.value) return

  slideDirection.value = index > slideIndex.value ? 'next' : 'prev'
  slideIndex.value = index
}

function openLightbox() {
  if (!currentSlide.value) return

  lightboxOpen.value = true
}

function closeLightbox() {
  lightboxOpen.value = false
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') closeLightbox()
  if (event.key === 'ArrowLeft') prev()
  if (event.key === 'ArrowRight') next()
}
</script>

<template>
  <div class="image-slider" :aria-label="ariaLabel">
    <div class="image-slider__track">
      <Transition :name="`image-slider-slide-${slideDirection}`">
        <img
          v-if="currentSlide"
          :key="`${currentSlide.src}-${slideIndex}`"
          :src="currentSlide.src"
          :alt="currentSlide.alt"
          class="image-slider__img"
          loading="lazy"
          decoding="async"
          @click="openLightbox"
        >
        <PlaceholderImage
          v-else
          key="placeholder"
          :label="placeholderLabel"
          :height="placeholderHeight"
        />
      </Transition>
    </div>

    <template v-if="hasSlider">
      <button
        class="image-slider__arrow image-slider__arrow--prev"
        type="button"
        aria-label="Предыдущий слайд"
        @click="prev"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M12.5 15l-5-5 5-5" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>

      <button
        class="image-slider__arrow image-slider__arrow--next"
        type="button"
        aria-label="Следующий слайд"
        @click="next"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M7.5 5l5 5-5 5" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>

      <div class="image-slider__dots" role="tablist" aria-label="Слайды">
        <button
          v-for="(_, index) in slides"
          :key="index"
          class="image-slider__dot"
          :class="{ 'image-slider__dot--active': index === slideIndex }"
          type="button"
          role="tab"
          :aria-selected="index === slideIndex"
          :aria-label="`Слайд ${index + 1}`"
          @click="goTo(index)"
        />
      </div>
    </template>
  </div>

  <Teleport to="body">
    <Transition name="image-slider-lightbox">
      <div v-if="lightboxOpen" class="image-slider-lightbox" @click.self="closeLightbox">
        <button
          class="image-slider-lightbox__close"
          type="button"
          aria-label="Закрыть"
          @click="closeLightbox"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" />
          </svg>
        </button>

        <button
          v-if="hasSlider"
          class="image-slider-lightbox__arrow image-slider-lightbox__arrow--prev"
          type="button"
          aria-label="Предыдущий слайд"
          @click="prev"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>

        <Transition :name="`image-slider-slide-${slideDirection}`" mode="out-in">
          <img
            v-if="currentSlide"
            :key="`lightbox-${currentSlide.src}-${slideIndex}`"
            :src="currentSlide.src"
            :alt="currentSlide.alt"
            class="image-slider-lightbox__img"
            loading="lazy"
            decoding="async"
          >
        </Transition>

        <button
          v-if="hasSlider"
          class="image-slider-lightbox__arrow image-slider-lightbox__arrow--next"
          type="button"
          aria-label="Следующий слайд"
          @click="next"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>

        <div v-if="hasSlider" class="image-slider-lightbox__dots">
          <span
            v-for="(_, index) in slides"
            :key="index"
            class="image-slider-lightbox__dot"
            :class="{ 'image-slider-lightbox__dot--active': index === slideIndex }"
          />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
