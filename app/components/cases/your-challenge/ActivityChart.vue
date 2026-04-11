<script setup lang="ts">
const events = [
  { id: "campaign-1-start", label: "Старт кампании 1", x: "20.8%", y: "34%" },
  { id: "campaign-1-end", label: "Конец кампании 1", x: "49.8%", y: "71.3%" },
  { id: "campaign-2-start", label: "Старт кампании 2", x: "70.4%", y: "52%" },
  { id: "campaign-2-end", label: "Конец кампании 2", x: "86.8%", y: "66%" },
];
</script>

<template>
  <div
    class="activity-chart"
    aria-label="Активность росла во время двух рекламных кампаний и падала после них"
  >
    <div class="activity-chart__plot">
      <div class="activity-chart__campaign activity-chart__campaign--first" />
      <div class="activity-chart__campaign activity-chart__campaign--second" />

      <AppTag
        class="activity-chart__tag activity-chart__tag--first"
        size="s"
        appearance="tonal"
      >
        Рекламная кампания 1
      </AppTag>
      <AppTag
        class="activity-chart__tag activity-chart__tag--second"
        size="s"
        appearance="tonal"
      >
        Рекламная кампания 2
      </AppTag>

      <svg
        class="activity-chart__svg"
        viewBox="0 0 1000 300"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="yc-activity-fill" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="0%"
              stop-color="var(--color-brand-primary)"
              stop-opacity="0.22"
            />
            <stop
              offset="76%"
              stop-color="var(--color-brand-primary)"
              stop-opacity="0.05"
            />
            <stop
              offset="100%"
              stop-color="var(--color-brand-primary)"
              stop-opacity="0"
            />
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
