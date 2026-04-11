<script setup lang="ts">
const events = [
  { id: 'campaign-1-start', label: 'Старт кампании 1', x: '20.8%', y: '34%' },
  { id: 'campaign-1-end', label: 'Конец кампании 1', x: '49.8%', y: '71.3%' },
  { id: 'campaign-2-start', label: 'Старт кампании 2', x: '70.4%', y: '52%' },
  { id: 'campaign-2-end', label: 'Конец кампании 2', x: '86.8%', y: '66%' },
]
</script>

<template>
  <div class="activity-chart" aria-label="Активность росла во время двух рекламных кампаний и падала после них">
    <div class="activity-chart__plot">
      <div class="activity-chart__campaign activity-chart__campaign--first" />
      <div class="activity-chart__campaign activity-chart__campaign--second" />

      <AppTag class="activity-chart__tag activity-chart__tag--first" size="s" appearance="tonal">
        Рекламная кампания 1
      </AppTag>
      <AppTag class="activity-chart__tag activity-chart__tag--second" size="s" appearance="tonal">
        Рекламная кампания 2
      </AppTag>

      <svg class="activity-chart__svg" viewBox="0 0 1000 300" preserveAspectRatio="none">
        <defs>
          <linearGradient id="yc-activity-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="var(--color-brand-primary)" stop-opacity="0.22" />
            <stop offset="76%" stop-color="var(--color-brand-primary)" stop-opacity="0.05" />
            <stop offset="100%" stop-color="var(--color-brand-primary)" stop-opacity="0" />
          </linearGradient>
          <filter id="yc-line-glow" x="-3%" y="-12%" width="106%" height="124%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 0.95 0 1 0 0 0.44 0 0 1 0 0.28 0 0 0 0.28 0"
              result="glow"
            />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <line class="activity-chart__grid" x1="0" y1="58" x2="1000" y2="58" />
        <line class="activity-chart__grid" x1="0" y1="126" x2="1000" y2="126" />
        <line class="activity-chart__grid" x1="0" y1="194" x2="1000" y2="194" />
        <line class="activity-chart__axis" x1="0" y1="260" x2="1000" y2="260" />

        <path
          class="activity-chart__fill"
          d="M0,260 L176,260 L208,102 L270,84 Q310,100 350,122 Q390,145 430,170 L498,214 L526,258 Q560,260 650,260 L678,260 L704,156 L762,142 Q790,154 818,170 L868,198 L898,258 Q940,260 1000,260 L1000,286 L0,286 Z"
        />
        <path
          class="activity-chart__line activity-chart__line--glow"
          d="M0,260 L176,260 L208,102 L270,84 Q310,100 350,122 Q390,145 430,170 L498,214 L526,258 Q560,260 650,260 L678,260 L704,156 L762,142 Q790,154 818,170 L868,198 L898,258 Q940,260 1000,260"
        />
        <path
          class="activity-chart__line"
          d="M0,260 L176,260 L208,102 L270,84 Q310,100 350,122 Q390,145 430,170 L498,214 L526,258 Q560,260 650,260 L678,260 L704,156 L762,142 Q790,154 818,170 L868,198 L898,258 Q940,260 1000,260"
        />
      </svg>

      <button
        v-for="event in events"
        :key="event.id"
        class="activity-chart__point"
        type="button"
        :aria-label="event.label"
        :style="{ left: event.x, top: event.y }"
      >
        <span class="activity-chart__tooltip">{{ event.label }}</span>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.activity-chart {
  min-height: 320px;
  padding: var(--spacing-5) var(--spacing-4) var(--spacing-4);
}

.activity-chart__plot {
  position: relative;
  min-height: 300px;
  overflow: hidden;
  border-radius: var(--radius-xl);
  background:
    radial-gradient(circle at 22% 10%, color-mix(in srgb, var(--color-brand-primary) 8%, transparent), transparent 34%),
    linear-gradient(180deg, color-mix(in srgb, var(--color-bg-surface) 72%, transparent), transparent);
}

.activity-chart__campaign {
  position: absolute;
  top: 12%;
  bottom: 14%;
  border-radius: var(--radius-lg);
  background: color-mix(in srgb, var(--color-brand-primary) 16%, transparent);
  border: 1px solid color-mix(in srgb, var(--color-brand-primary) 10%, transparent);
}

.activity-chart__campaign--first {
  left: 18%;
  width: 35%;
}

.activity-chart__campaign--second {
  left: 68%;
  width: 21%;
}

.activity-chart__tag {
  position: absolute;
  z-index: 3;
  top: 8%;
  transform: translateX(-50%);
  color: var(--color-text-primary);
  box-shadow: var(--shadow-subtle);
  font-size: var(--text-caption);
  line-height: 1;
}

.activity-chart__tag--first {
  left: 31%;
}

.activity-chart__tag--second {
  left: 78.5%;
}

.activity-chart__svg {
  position: absolute;
  inset: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  overflow: visible;
}

.activity-chart__grid {
  stroke: color-mix(in srgb, var(--color-border-subtle) 72%, transparent);
  stroke-width: 1;
  stroke-dasharray: 4 8;
}

.activity-chart__axis {
  stroke: color-mix(in srgb, var(--color-border-default) 72%, transparent);
  stroke-width: 1.5;
}

.activity-chart__fill {
  fill: url('#yc-activity-fill');
}

.activity-chart__line {
  fill: none;
  stroke: var(--color-brand-primary);
  stroke-width: 2.5;
  stroke-linecap: butt;
  stroke-linejoin: miter;
  vector-effect: non-scaling-stroke;
}

.activity-chart__line--glow {
  opacity: 0.12;
  stroke-width: 5;
  filter: url('#yc-line-glow');
}

.activity-chart__point {
  position: absolute;
  z-index: 4;
  width: 14px;
  height: 14px;
  padding: 0;
  border: 2.5px solid var(--color-brand-primary);
  border-radius: var(--radius-pill);
  background: var(--color-bg-surface);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-brand-primary) 8%, transparent);
  cursor: help;
  transform: translate(-50%, -50%);
  transition: box-shadow 0.16s ease, transform 0.16s ease;
}

.activity-chart__point:focus-visible {
  outline: 2px solid var(--color-border-focus);
  outline-offset: 4px;
}

.activity-chart__tooltip {
  position: absolute;
  left: 50%;
  bottom: calc(100% + var(--spacing-2));
  width: max-content;
  max-width: 180px;
  padding: 7px 12px;
  border: 1px solid var(--color-border-accent);
  border-radius: var(--radius-pill);
  background: var(--color-bg-surface);
  color: var(--color-text-primary);
  box-shadow: var(--shadow-subtle);
  font-size: var(--text-caption);
  font-weight: var(--font-weight-heading);
  line-height: 1;
  opacity: 0;
  pointer-events: none;
  transform: translate(-50%, 4px);
  transition: opacity 0.16s ease, transform 0.16s ease;
  white-space: nowrap;
}

.activity-chart__point:hover .activity-chart__tooltip,
.activity-chart__point:focus-visible .activity-chart__tooltip {
  opacity: 1;
  transform: translate(-50%, 0);
}

.activity-chart__point:hover,
.activity-chart__point:focus-visible {
  box-shadow: 0 0 0 5px color-mix(in srgb, var(--color-brand-primary) 12%, transparent);
  transform: translate(-50%, -50%) scale(1.06);
}

@media (max-width: 640px) {
  .activity-chart {
    min-height: 260px;
    padding: var(--spacing-4) var(--spacing-2);
  }

  .activity-chart__plot {
    min-height: 240px;
  }

  .activity-chart__tag {
    padding: 6px 9px;
    font-size: 10px;
  }

  .activity-chart__point {
    width: 12px;
    height: 12px;
    border-width: 2px;
  }
}
</style>
