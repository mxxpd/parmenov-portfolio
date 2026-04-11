<script setup lang="ts">
const { openContact } = useModal()
</script>

<template>
  <section class="hero">
    <div class="hero__copy">
      <div class="hero__intro">
        <AppTag>Product дизайнер</AppTag>

        <h1 class="hero__title">
          Проектирую интерфейсы. Думаю продуктом.
        </h1>
      </div>

      <div class="hero__body">
        <p class="hero__description">
          UX-архитектура, сценарии, визуальная система — и понимание, зачем всё это нужно бизнесу.
        </p>

        <div class="hero__actions">
          <AppButton label="Связаться со мной" size="lg" :icon="true" @click="openContact" />
          <AppButton label="Посмотреть кейсы" variant="secondary" size="lg" href="/cases" />
        </div>
      </div>

      <p class="hero__tagline">
        HoReCa • AI Analytics • iGaming • AdTech
      </p>
    </div>

    <div class="hero__visual" aria-hidden="true">
      <div class="hero__visual-orb hero__visual-orb--1" />
      <div class="hero__visual-orb hero__visual-orb--2" />
    </div>
  </section>
</template>
