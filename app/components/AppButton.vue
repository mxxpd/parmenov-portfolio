<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href || undefined"
    class="app-btn"
    :class="[
      `app-btn--${size}`,
      `app-btn--${variant}`,
      { 'app-btn--has-icon': hasIcon, 'app-btn--icon-left': hasIcon && iconPosition === 'left' },
    ]"
  >
    <span v-if="hasIcon && iconPosition === 'left'" class="app-btn__icon-wrap">
      <slot name="icon"><ArrowUpRightIcon class="app-btn__icon" /></slot>
    </span>

    <span class="app-btn__label" :class="{ 'app-btn__label--with-icon': hasIcon }">{{ label }}</span>

    <span v-if="hasIcon && iconPosition === 'right'" class="app-btn__icon-wrap">
      <slot name="icon"><ArrowUpRightIcon class="app-btn__icon" /></slot>
    </span>
  </component>
</template>

<script setup lang="ts">
import ArrowUpRightIcon from '~/assets/icons/arrow-up-right.svg'

const props = withDefaults(
  defineProps<{
    label: string
    variant?: 'primary' | 'secondary'
    size?: 'sm' | 'md' | 'lg'
    icon?: boolean
    iconPosition?: 'left' | 'right'
    href?: string
  }>(),
  {
    variant: 'primary',
    size: 'md',
    icon: false,
    iconPosition: 'right',
    href: undefined,
  },
)

const slots = useSlots()
const hasIcon = computed(() => !!slots.icon || props.icon)
</script>
