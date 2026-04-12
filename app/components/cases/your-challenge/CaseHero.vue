<script setup lang="ts">
import heroPreviewUrl from "~/assets/images/cases/your-challenge/hero-preview.png";

const stats = [
  { value: "×13", label: "Рост базы пользователей" },
  { value: "40%", label: "Конверсия в первый матч" },
  { value: "300", label: "Матчей в месяц у топ-игроков" },
  { value: "2 мес", label: "До первого результата" },
];

const accents = [
  "Пивот продукта",
  "MVP за короткий цикл",
  "Поведенческая логика",
];
</script>

<template>
  <section class="yc-hero hero" aria-label="Заголовок кейса">
    <div class="hero__intro">
      <div class="hero__copy">
        <p class="hero__tag">iGaming · 2022–2025 · Product Designer</p>

        <h1 class="hero__title">
          Как я перезапустил продукт и вырастил базу пользователей в 13 раз за 2
          месяца
        </h1>

        <p class="hero__subtitle">
          Пивот с нуля: от сломанной модели челленджей до быстрых матчей,
          которые реально работают.
        </p>

        <div
          class="hero__accents"
          role="list"
          aria-label="Ключевые акценты кейса"
        >
          <span
            v-for="accent in accents"
            :key="accent"
            class="hero__accent"
            role="listitem"
          >
            {{ accent }}
          </span>
        </div>
      </div>

      <div class="hero__preview">
        <img
          :src="heroPreviewUrl"
          alt="Главный экран Your Challenge"
          class="hero__preview-image"
          loading="lazy"
          decoding="async"
        >
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
