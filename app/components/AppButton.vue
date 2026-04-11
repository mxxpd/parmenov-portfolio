<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="isDisabled ? undefined : href || undefined"
    :type="href ? undefined : nativeType"
    :disabled="href ? undefined : isDisabled"
    :aria-disabled="isDisabled || undefined"
    :tabindex="href && isDisabled ? -1 : undefined"
    class="app-btn"
    :class="[
      `app-btn--${size}`,
      `app-btn--${variant}`,
      {
        'app-btn--has-icon': hasIcon,
        'app-btn--icon-left': hasIcon && iconPosition === 'left',
        'app-btn--disabled': isDisabled,
        'app-btn--loading': loading,
      },
    ]"
  >
    <span v-if="loading" class="app-btn__spinner" aria-hidden="true" />

    <span v-else-if="hasIcon && iconPosition === 'left'" class="app-btn__icon-wrap">
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
    nativeType?: 'button' | 'submit' | 'reset'
    disabled?: boolean
    loading?: boolean
  }>(),
  {
    variant: 'primary',
    size: 'md',
    icon: false,
    iconPosition: 'right',
    href: undefined,
    nativeType: 'button',
    disabled: false,
    loading: false,
  },
)

const slots = useSlots()
const isDisabled = computed(() => props.disabled || props.loading)
const hasIcon = computed(() => !props.loading && (!!slots.icon || props.icon))
</script>
