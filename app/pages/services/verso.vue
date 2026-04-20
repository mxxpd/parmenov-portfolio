<script setup lang="ts">
import versoEpubLibraryUrl from '~/assets/images/services/verso/epub-library.png'
import versoHeroUrl from '~/assets/images/services/verso/hero.png'
import versoProvidersUrl from '~/assets/images/services/verso/providers.png'
import versoTranslationRequestUrl from '~/assets/images/services/verso/translation-request.png'
import VersoLibraryIcon from '~/assets/icons/verso-library.svg'
import VersoProvidersIcon from '~/assets/icons/verso-providers.svg'
import VersoTranslateIcon from '~/assets/icons/verso-translate.svg'

type FaqAnswerLink = {
  label: string
  href: string
}

type FaqAnswerPart = string | FaqAnswerLink

const faq = [
  {
    q: 'Это бесплатно?',
    a: ['Само приложение бесплатно. Для перевода нужен API-ключ — Claude, OpenAI или AITunnel. Перевод одной главы стоит 20–50 копеек, вся книга около 50–80 рублей.'],
  },
  {
    q: 'Где взять API-ключ?',
    a: [
      'Для Claude — на ',
      { label: 'console.anthropic.com', href: 'https://console.anthropic.com/' },
      '. Для ChatGPT — на ',
      { label: 'platform.openai.com', href: 'https://platform.openai.com/' },
      '. Если не получается пополнить баланс из России — на ',
      { label: 'aitunnel.ru', href: 'https://aitunnel.ru/' },
      ', поддерживает российские карты. В приложении есть инструкция прямо при первом запуске.',
    ],
  },
  {
    q: 'Мои книги куда-то загружаются?',
    a: ['Нет. Книги и ключ хранятся только на вашем компьютере. В интернет отправляется только текст страницы для перевода.'],
  },
  {
    q: 'Какие форматы поддерживаются?',
    a: ['Только epub. PDF и другие форматы пока не поддерживаются.'],
  },
  {
    q: 'Перевод хорошего качества?',
    a: ['Используется тот же ИИ, что и в Claude.ai и ChatGPT. Качество значительно выше, чем у Google Translate, особенно для художественной литературы.'],
  },
]

const isFaqAnswerLink = (part: FaqAnswerPart): part is FaqAnswerLink => typeof part !== 'string'

const openIndex = ref<number | null>(null)

const toggle = (i: number) => {
  openIndex.value = openIndex.value === i ? null : i
}

useSeoMeta({
  title: 'Verso — epub-ридер с AI-переводом',
  description: 'Verso переводит страницу, которую вы читаете прямо в момент чтения. Никаких вкладок, никакого копипаста.',
  ogTitle: 'Verso — epub-ридер с AI-переводом',
  ogLocale: 'ru_RU',
})
</script>

<template>
  <div class="verso-page">

    <section class="verso-hero">
      <div class="verso-hero__copy">
        <div class="verso-hero__meta">
          <AppTag size="s" variant="brand" appearance="tonal">Инструменты</AppTag>
          <span class="verso-hero__year">Personal Project · 2026</span>
        </div>

        <h1 class="verso-hero__title">
          Читайте английские книги на русском — без усилий
        </h1>

        <p class="verso-hero__description">
          Verso переводит страницу, которую вы читаете прямо в момент чтения.
          Никаких вкладок, никакого копипаста.
        </p>

        <AppButton
          label="Скачать для Windows"
          size="lg"
          :icon="true"
          href="/downloads/Verso_0.1.0_x64-setup.exe"
        />
      </div>

      <div class="verso-hero__visual" aria-label="Скриншот приложения Verso">
        <img
          class="verso-media"
          :src="versoHeroUrl"
          alt="Интерфейс Verso с открытой книгой и переводом"
          width="1800"
          height="1220"
          decoding="async"
          fetchpriority="high"
        >
      </div>
    </section>

    <section class="verso-features">

      <div class="verso-feature">
        <div class="verso-feature__copy">
          <span class="verso-feature__icon" aria-hidden="true">
            <VersoTranslateIcon />
          </span>
          <div class="verso-feature__text">
            <h2 class="verso-feature__title">Перевод по запросу</h2>
            <p class="verso-feature__desc">Открыл страницу, получил перевод. Только то, что читаешь сейчас, не вся книга сразу.</p>
          </div>
        </div>
        <div class="verso-feature__visual">
          <img
            class="verso-media"
            :src="versoTranslationRequestUrl"
            alt="Режим чтения Verso с переводом по запросу"
            width="1640"
            height="800"
            loading="lazy"
            decoding="async"
          >
        </div>
      </div>

      <div class="verso-feature verso-feature--reverse">
        <div class="verso-feature__copy">
          <span class="verso-feature__icon" aria-hidden="true">
            <VersoProvidersIcon />
          </span>
          <div class="verso-feature__text">
            <h2 class="verso-feature__title">Поддержка Claude, ChatGPT и AITunnel</h2>
            <p class="verso-feature__desc">Подключи свой API-ключ и выбирай провайдера. Для пользователей из России — AITunnel позволяет пополнить баланс без ограничений. Ключ хранится только на твоём компьютере.</p>
          </div>
        </div>
        <div class="verso-feature__visual">
          <img
            class="verso-media"
            :src="versoProvidersUrl"
            alt="Настройки Verso с выбором AI-провайдера"
            width="1640"
            height="800"
            loading="lazy"
            decoding="async"
          >
        </div>
      </div>

      <div class="verso-feature">
        <div class="verso-feature__copy">
          <span class="verso-feature__icon" aria-hidden="true">
            <VersoLibraryIcon />
          </span>
          <div class="verso-feature__text">
            <h2 class="verso-feature__title">Любые epub файлы</h2>
            <p class="verso-feature__desc">Перетащи книгу в приложение и начинай читать. Библиотека хранится локально.</p>
          </div>
        </div>
        <div class="verso-feature__visual">
          <img
            class="verso-media"
            :src="versoEpubLibraryUrl"
            alt="Библиотека Verso с epub-книгами"
            width="1640"
            height="800"
            loading="lazy"
            decoding="async"
          >
        </div>
      </div>

    </section>

    <section class="verso-mini-features">
      <div class="verso-mini-feature">
        <h3 class="verso-mini-feature__title">Оригинал и перевод рядом</h3>
        <p class="verso-mini-feature__desc">Переключайся между режимами или читай в две колонки.</p>
      </div>
      <div class="verso-mini-feature">
        <h3 class="verso-mini-feature__title">Кэш переводов</h3>
        <p class="verso-mini-feature__desc">Переведённые страницы сохраняются. Повторно API не тратится.</p>
      </div>
    </section>

    <section class="verso-faq">
      <h2 class="verso-faq__title">Вопросы и ответы</h2>
      <div class="verso-faq__list">
        <div
          v-for="(item, i) in faq"
          :key="i"
          class="verso-faq__item"
          :class="{ 'verso-faq__item--open': openIndex === i }"
        >
          <button
            class="verso-faq__question"
            type="button"
            :aria-expanded="openIndex === i"
            :aria-controls="`verso-faq-answer-${i}`"
            @click="toggle(i)"
          >
            <span>{{ item.q }}</span>
            <span class="verso-faq__icon" aria-hidden="true" />
          </button>
          <div :id="`verso-faq-answer-${i}`" class="verso-faq__answer">
            <p>
              <template
                v-for="(part, partIndex) in item.a"
                :key="`${i}-${partIndex}`"
              >
                <a
                  v-if="isFaqAnswerLink(part)"
                  :href="part.href"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {{ part.label }}
                </a>
                <template v-else>{{ part }}</template>
              </template>
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="verso-cta">
      <div class="verso-cta__pricing">
        <h3 class="verso-cta__pricing-title">Стоимость перевода</h3>
        <p class="verso-cta__pricing-text">Перевод одной главы через API стоит 20–50 копеек. Вся книга на 200 страниц — около 50–80 рублей.</p>
      </div>
      <div class="verso-cta__action">
        <AppButton
          label="Скачать для Windows — бесплатно"
          size="lg"
          :icon="true"
          href="/downloads/Verso_0.1.0_x64-setup.exe"
        />
        <p class="verso-cta__hint">Windows 11 · exe · ~5 MB</p>
      </div>
    </section>

  </div>
</template>
