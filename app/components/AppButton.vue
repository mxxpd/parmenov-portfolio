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
      <slot name="icon"><PlugIcon class="app-btn__icon" /></slot>
    </span>

    <span class="app-btn__label">{{ label }}</span>

    <span v-if="hasIcon && iconPosition === 'right'" class="app-btn__icon-wrap">
      <slot name="icon"><PlugIcon class="app-btn__icon" /></slot>
    </span>
  </component>
</template>

<script setup lang="ts">
import PlugIcon from '~/assets/icons/plug.svg'

const props = withDefaults(
  defineProps<{
    label: string
    variant?: 'primary' | 'ghost'
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
  },
)

const slots = useSlots()
const hasIcon = computed(() => !!slots.icon || props.icon)
</script>

<style scoped>
.app-btn {
  --btn-height: var(--btn-height-md);
  --btn-px: var(--spacing-6);
  --btn-icon-size: 28px;
  --btn-font: var(--text-body-sm);

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-2);
  height: var(--btn-height);
  padding: 0 var(--btn-px);
  border: none;
  border-radius: var(--radius-pill);
  cursor: pointer;
  font-family: var(--font-sans);
  font-size: var(--btn-font);
  font-weight: var(--font-weight-heading);
  text-decoration: none;
  white-space: nowrap;
  user-select: none;
  outline: none;

  transition:
    transform 0.18s ease,
    box-shadow 0.18s ease,
    background 0.18s ease,
    filter 0.18s ease;
}

/* ── Variants ───────────────────────────────────────── */
.app-btn--primary {
  background: linear-gradient(
    135deg,
    var(--color-brand-primary) 0%,
    var(--color-bg-accent-hover) 100%
  );
  color: var(--color-text-inverse);
}

.app-btn--ghost {
  background: color-mix(in srgb, var(--color-bg-surface) 84%, transparent);
  border: 1px solid color-mix(in srgb, var(--color-border-default) 78%, transparent);
  color: var(--color-text-primary);
}

/* ── Sizes ─────────────────────────────────────────── */
.app-btn--sm {
  --btn-height: 40px;
  --btn-px: var(--spacing-4);
  --btn-icon-size: 22px;
  --btn-font: var(--text-label);
}

.app-btn--md {
  --btn-height: 50px;
  --btn-px: var(--spacing-6);
  --btn-icon-size: 28px;
}

.app-btn--lg {
  --btn-height: 56px;
  --btn-px: var(--spacing-8);
  --btn-icon-size: 32px;
  --btn-font: var(--text-body);
}

/* ── Icon wrap ──────────────────────────────────────── */
.app-btn__icon-wrap {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--btn-icon-size);
  height: var(--btn-icon-size);
  border-radius: 50%;
  background: var(--color-bg-inverse);
  color: var(--color-text-inverse);
  transition:
    background 0.18s ease,
    color 0.18s ease;
}

.app-btn--ghost .app-btn__icon-wrap {
  background: color-mix(in srgb, var(--color-bg-inverse) 12%, transparent);
  color: var(--color-text-primary);
}

.app-btn__icon {
  width: calc(var(--btn-icon-size) * 0.46);
  height: calc(var(--btn-icon-size) * 0.46);
}

/* ── Padding adjustment when icon present ───────────── */
.app-btn--has-icon {
  padding-right: var(--spacing-2);
}

.app-btn--has-icon.app-btn--icon-left {
  padding-left: var(--spacing-2);
  padding-right: var(--btn-px);
}

/* ── States: primary ────────────────────────────────── */
.app-btn--primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px color-mix(in srgb, var(--color-brand-primary) 38%, transparent);
  filter: brightness(1.06);
}

.app-btn--primary:hover .app-btn__icon-wrap {
  background: color-mix(in srgb, var(--color-bg-inverse) 82%, var(--color-brand-primary));
}

.app-btn--primary:active {
  transform: translateY(0px);
  box-shadow: 0 2px 8px color-mix(in srgb, var(--color-brand-primary) 22%, transparent);
  filter: brightness(0.94);
}

/* ── States: ghost ──────────────────────────────────── */
.app-btn--ghost:hover {
  transform: translateY(-2px);
  background: var(--color-bg-surface);
  box-shadow: 0 4px 16px color-mix(in srgb, var(--color-border-default) 30%, transparent);
}

.app-btn--ghost:active {
  transform: translateY(0px);
}

/* ── Focus ──────────────────────────────────────────── */
.app-btn:focus-visible {
  outline: 2px solid var(--color-brand-primary);
  outline-offset: 3px;
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--color-brand-primary) 20%, transparent);
}
</style>
