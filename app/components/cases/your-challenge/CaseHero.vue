<script setup lang="ts">
const stats = [
  { value: '×13', label: 'Рост базы пользователей' },
  { value: '40%', label: 'Конверсия в первый матч' },
  { value: '300', label: 'Матчей в месяц у топ-игроков' },
  { value: '2 мес', label: 'До первого результата' },
]

const accents = [
  'Пивот продукта',
  'MVP за короткий цикл',
  'Поведенческая логика',
]
</script>

<template>
  <section class="hero" aria-label="Заголовок кейса">
    <div class="hero__intro">
      <div class="hero__copy">
        <p class="hero__tag">iGaming · 2021-2024 · Product Designer</p>

        <h1 class="hero__title">
          Как я перезапустил продукт и вырастил базу пользователей в 13 раз за 2 месяца
        </h1>

        <p class="hero__subtitle">
          Skill-based gaming platform — соревновательные матчи на деньги между игроками в Counter-Strike.
        </p>

        <div class="hero__accents" role="list" aria-label="Ключевые акценты кейса">
          <span v-for="accent in accents" :key="accent" class="hero__accent" role="listitem">
            {{ accent }}
          </span>
        </div>
      </div>

      <div class="hero__preview" aria-label="Превью кейса Your Challenge" role="img">
        <div class="hero__preview-orb hero__preview-orb--1" />
        <div class="hero__preview-orb hero__preview-orb--2" />

        <div class="preview-window">
          <div class="preview-window__toolbar">
            <span class="preview-window__dot" />
            <span class="preview-window__dot" />
            <span class="preview-window__dot" />
          </div>

          <div class="preview-window__body">
            <div class="preview-window__head">
              <span class="preview-window__eyebrow">Your Challenge</span>
              <span class="preview-window__badge">Case Cover</span>
            </div>

            <div class="preview-window__canvas">
              <div class="preview-window__frame" />
            </div>

            <p class="preview-window__caption">
              Заглушка под будущую обложку кейса.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="stats" role="list" aria-label="Ключевые метрики">
      <div v-for="s in stats" :key="s.value" class="stat" role="listitem">
        <p class="stat__value">{{ s.value }}</p>
        <p class="stat__label">{{ s.label }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-6);
  padding-top: var(--spacing-8);
}

.hero__intro {
  display: grid;
  grid-template-columns: minmax(0, 1.02fr) minmax(420px, 0.98fr);
  gap: var(--spacing-4);
  align-items: stretch;
  width: min(calc(100vw - 48px), 1432px);
  margin-left: 50%;
  transform: translateX(-50%);
}

.hero__copy,
.hero__preview {
  min-height: 560px;
  border-radius: 32px;
}

.hero__copy {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-6);
  padding: var(--spacing-8);
  border: 1px solid color-mix(in srgb, var(--color-border-subtle) 72%, transparent);
  background: color-mix(in srgb, var(--color-bg-surface) 92%, transparent);
  box-shadow: var(--shadow-raised);
}

.hero__tag {
  font-size: var(--text-label);
  font-weight: var(--font-weight-heading);
  color: var(--color-text-accent);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.hero__title {
  font-size: clamp(28px, 3.3vw, 52px);
  font-weight: var(--font-weight-display);
  line-height: 1.02;
  letter-spacing: -0.035em;
  color: var(--color-text-primary);
  max-width: 13ch;
}

.hero__subtitle {
  max-width: 40ch;
  font-size: var(--text-h4);
  line-height: var(--line-height-body-relaxed);
  color: var(--color-text-secondary);
}

.hero__accents {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-2);
  margin-top: auto;
}

.hero__accent {
  display: inline-flex;
  align-items: center;
  padding: 8px 14px;
  border-radius: var(--radius-pill);
  background: color-mix(in srgb, var(--color-brand-primary) 12%, transparent);
  border: 1px solid color-mix(in srgb, var(--color-border-accent) 84%, transparent);
  color: var(--color-text-accent);
  font-size: var(--text-body-sm);
  font-weight: var(--font-weight-heading);
  white-space: nowrap;
}

.hero__preview {
  position: relative;
  overflow: hidden;
  padding: var(--spacing-6);
  border: 1px solid color-mix(in srgb, var(--color-border-subtle) 72%, transparent);
  background:
    linear-gradient(
      160deg,
      color-mix(in srgb, var(--color-bg-inverse) 92%, transparent) 0%,
      color-mix(in srgb, var(--color-brand-soft) 54%, var(--color-bg-inverse)) 100%
    );
  box-shadow: var(--shadow-raised);
}

.hero__preview-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(64px);
  pointer-events: none;
}

.hero__preview-orb--1 {
  width: 320px;
  height: 320px;
  top: -80px;
  right: -60px;
  background: color-mix(in srgb, var(--color-brand-primary) 22%, transparent);
}

.hero__preview-orb--2 {
  width: 260px;
  height: 260px;
  bottom: -60px;
  left: -30px;
  background: color-mix(in srgb, var(--color-brand-soft) 54%, transparent);
}

.preview-window {
  position: relative;
  z-index: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 28px;
  border: 1px solid color-mix(in srgb, var(--color-border-subtle) 75%, transparent);
  background: color-mix(in srgb, var(--color-bg-surface) 92%, transparent);
  box-shadow:
    0 24px 60px rgba(13, 13, 13, 0.14),
    inset 0 1px 0 rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(18px);
}

.preview-window__toolbar {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px 18px;
  border-bottom: 1px solid color-mix(in srgb, var(--color-border-subtle) 74%, transparent);
}

.preview-window__dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--color-text-tertiary) 60%, transparent);
}

.preview-window__body {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
}

.preview-window__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-3);
}

.preview-window__eyebrow,
.preview-window__badge {
  display: inline-flex;
  align-items: center;
  padding: 6px 12px;
  border-radius: var(--radius-pill);
  font-size: var(--text-caption);
  font-weight: var(--font-weight-heading);
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.preview-window__eyebrow {
  background: color-mix(in srgb, var(--color-brand-primary) 12%, transparent);
  color: var(--color-text-accent);
}

.preview-window__badge {
  background: color-mix(in srgb, var(--color-bg-surface-muted) 82%, transparent);
  color: var(--color-text-secondary);
}

.preview-window__canvas {
  flex: 1;
  min-height: 320px;
  border-radius: 24px;
  border: 1px solid color-mix(in srgb, var(--color-border-subtle) 72%, transparent);
  background:
    linear-gradient(
      180deg,
      color-mix(in srgb, var(--color-bg-surface-muted) 94%, transparent),
      color-mix(in srgb, var(--color-bg-surface) 96%, transparent)
    );
  padding: 18px;
}

.preview-window__frame {
  width: 100%;
  height: 100%;
  border-radius: 18px;
  border: 1px dashed color-mix(in srgb, var(--color-border-default) 72%, transparent);
  background:
    radial-gradient(circle at top right, color-mix(in srgb, var(--color-brand-primary) 8%, transparent), transparent 34%),
    radial-gradient(circle at bottom left, color-mix(in srgb, var(--color-brand-soft) 20%, transparent), transparent 38%),
    color-mix(in srgb, var(--color-bg-canvas) 38%, transparent);
}

.preview-window__caption {
  font-size: var(--text-body-sm);
  line-height: var(--line-height-body-relaxed);
  color: var(--color-text-secondary);
}

.stats {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: var(--spacing-3);
  width: min(calc(100vw - 48px), 1432px);
  margin-left: 50%;
  transform: translateX(-50%);
}

.stat {
  background: var(--color-bg-surface);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-subtle);
  padding: var(--spacing-6);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
}

.stat__value {
  font-size: clamp(32px, 4vw, 48px);
  font-weight: var(--font-weight-display);
  line-height: 1;
  color: var(--color-brand-primary);
}

.stat__label {
  font-size: var(--text-body-sm);
  color: var(--color-text-secondary);
  line-height: var(--line-height-body);
}

@media (max-width: 1080px) {
  .hero__intro {
    grid-template-columns: 1fr;
    width: 100%;
    margin-left: 0;
    transform: none;
  }

  .stats {
    width: 100%;
    margin-left: 0;
    transform: none;
  }

  .hero__copy,
  .hero__preview {
    min-height: unset;
  }

  .hero__title {
    max-width: 14ch;
  }

  .hero__preview {
    min-height: 460px;
  }
}

@media (max-width: 760px) {
  .stats {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .hero {
    gap: var(--spacing-4);
    padding-top: var(--spacing-4);
  }

  .hero__copy,
  .hero__preview {
    padding: var(--spacing-6);
    border-radius: var(--radius-xl);
  }

  .hero__title {
    font-size: clamp(26px, 8vw, 40px);
    max-width: 100%;
  }

  .hero__intro {
    width: 100%;
  }

  .preview-window {
    border-radius: var(--radius-xl);
  }

  .preview-window__body {
    padding: 18px;
    gap: 18px;
  }

  .preview-window__canvas {
    min-height: 240px;
    padding: 14px;
  }
}
</style>
