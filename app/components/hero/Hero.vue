<template>
  <section class="hero">
    <div class="hero__copy">
      <span class="hero__label">UX/UI дизайнер</span>

      <h1 class="hero__title">
        Создаю системный дизайн<br>
        для любых цифровых продуктов
      </h1>

      <p class="hero__description">
        Проектирую интерфейсы, упрощаю сложное и помогаю продуктам расти
        через дизайн и системный подход.
      </p>

      <div class="hero__actions">
        <AppButton label="Связаться со мной" size="lg" :icon="true" />
        <AppButton label="Посмотреть кейсы" variant="ghost" size="lg" href="/cases" />
      </div>

      <p class="hero__tagline">
        B2B&nbsp;• B2C&nbsp;• iGaming&nbsp;• HoReCa&nbsp;• Data-heavy интерфейсы
      </p>
    </div>

    <div class="hero__visual" aria-hidden="true">
      <div class="hero__visual-orb hero__visual-orb--1"></div>
      <div class="hero__visual-orb hero__visual-orb--2"></div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: var(--spacing-4);
  align-items: stretch;
}

/* ── Left: copy ─────────────────────────────────────── */
.hero__copy {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-6);
  padding: var(--spacing-8);
  border: 1px solid color-mix(in srgb, var(--color-border-subtle) 72%, transparent);
  border-radius: 32px;
  background: color-mix(in srgb, var(--color-bg-surface) 92%, transparent);
  box-shadow: var(--shadow-raised);
}

.hero__label {
  display: inline-flex;
  align-self: flex-start;
  padding: 6px 14px;
  border-radius: var(--radius-pill);
  background: color-mix(in srgb, var(--color-brand-primary) 14%, transparent);
  color: var(--color-brand-primary);
  font-size: var(--text-body-sm);
  font-weight: var(--font-weight-heading);
  letter-spacing: 0.02em;
}

.hero__title {
  font-size: clamp(26px, 2.7vw, 44px);
  font-weight: var(--font-weight-display);
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: var(--color-text-primary);
}

.hero__description {
  max-width: 42ch;
  font-size: var(--text-body);
  line-height: var(--line-height-body-relaxed);
  color: var(--color-text-secondary);
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-3);
}

.hero__tagline {
  margin-top: auto;
  font-size: var(--text-body-sm);
  color: var(--color-text-secondary);
  opacity: 0.72;
}

/* ── Right: visual ──────────────────────────────────── */
.hero__visual {
  position: relative;
  overflow: hidden;
  min-height: 560px;
  border-radius: 32px;
  background:
    linear-gradient(
      160deg,
      color-mix(in srgb, var(--color-bg-inverse) 92%, transparent) 0%,
      color-mix(in srgb, var(--color-brand-soft) 54%, var(--color-bg-inverse)) 100%
    );
}

.hero__visual-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  pointer-events: none;
}

.hero__visual-orb--1 {
  width: 340px;
  height: 340px;
  top: -60px;
  left: -60px;
  background: color-mix(in srgb, var(--color-brand-soft) 50%, transparent);
}

.hero__visual-orb--2 {
  width: 280px;
  height: 280px;
  bottom: -40px;
  right: -40px;
  background: color-mix(in srgb, var(--color-brand-primary) 24%, transparent);
}

/* ── Responsive ─────────────────────────────────────── */
@media (max-width: 1024px) {
  .hero {
    grid-template-columns: 1fr;
  }

  .hero__visual {
    min-height: 280px;
  }
}

@media (max-width: 640px) {
  .hero__copy {
    padding: var(--spacing-6);
    border-radius: var(--radius-xl);
  }

  .hero__visual {
    min-height: 200px;
    border-radius: var(--radius-xl);
  }

  .hero__actions {
    flex-direction: column;
  }

  .hero__actions .app-btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
