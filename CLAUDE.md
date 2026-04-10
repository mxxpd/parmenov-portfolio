# Portfolio Project - Claude Reference

## Owner

**Максим Парменов** — UX/UI и продуктовый дизайнер.

Специализация:
- сервисные продукты любой сложности
- data-heavy интерфейсы
- финтех
- аналитика
- web и mobile

Не фокусируется на лендингах и e-commerce.

## Purpose

Личный сайт-портфолио.

Текущее ядро проекта:
- главная
- кейсы
- сервисы
- статьи

В перспективе:
- CMS для управления кейсами и статьями
- админка
- авторизация

## Current Stack

```text
Frontend: Nuxt 4, Vue 3, TypeScript, Tailwind CSS v4
Backend:  Nuxt Nitro
Runtime:  Node 22 + Docker
Quality:  ESLint, nuxt typecheck
Text:     Typograf
```

## Planned Stack

Это контекст на будущее, не внедрять без отдельной задачи.

```text
Data:    PostgreSQL, Drizzle ORM, Drizzle Kit, pg, Zod
Auth:    Nuxt Auth Utils, Nuxt Security
CMS:     Tiptap
Media:   @nuxt/image, MinIO
Testing: Vitest
Infra:   Docker, Docker Compose, Mailpit
```

## Project Structure

```text
d:/PROJECTS/pf/
|- app/
|  |- assets/
|  |  |- css/main.css
|  |  `- icons/
|  |- components/
|  |  |- AppButton.vue
|  |  |- PlaceholderImage.vue
|  |  |- TypoText.vue
|  |  |- cases/
|  |  |  `- your-challenge/
|  |  |- header/
|  |  `- hero/
|  |- composables/
|  |  |- useCases.ts
|  |  |- useScrollReveal.ts
|  |  |- useTheme.ts
|  |  `- useTypograf.ts
|  |- layouts/default.vue
|  |- pages/
|  |  |- index.vue
|  |  |- services.vue
|  |  |- articles.vue
|  |  `- cases/
|  |     |- index.vue
|  |     |- [slug].vue
|  |     |- nova-bank.vue
|  |     `- your-challenge.vue
|  `- plugins/
|     `- typograf.ts
|- public/favicon.svg
|- nuxt.config.ts
|- eslint.config.mjs
|- tsconfig.json
|- package.json
|- Dockerfile
|- docker-compose.yml
|- docker-compose.dev.yml
`- DEPLOY.md
```

## Important Notes

- `app/pages/cases/nova-bank.vue` — временный визуальный референс дизайн-системы. Не удалять и не рефакторить без причины.
- Данные по кейсам лежат в `app/composables/useCases.ts`.
- Детальный кейс `your-challenge` собран из отдельных секций в `app/components/cases/your-challenge/`.
- `vite-svg-loader` должен оставаться в `dependencies`, потому что нужен Nuxt во время загрузки конфига.
- Типограф сейчас включён и работает глобально через директиву `v-typo` в `app/layouts/default.vue`.
- Для точечной типографики доступны `useTypograf()` и компонент `TypoText.vue`.

## Design System

Основные токены лежат в `app/assets/css/main.css`.

- брендовая палитра: peach / ink / sand + status colors
- шрифт: Onest
- семантические токены для текста, фонов, границ, радиусов, теней и spacing
- тёмная тема управляется через `data-theme="dark"` на `<html>`

## Navigation

- `/` -> главная
- `/cases` -> кейсы
- `/services` -> сервисы
- `/articles` -> статьи

## Run

Основной локальный режим разработки через Docker:

```bash
npm install
npm run dev
```

Локальный запуск без Docker:

```bash
npm run dev:local
```

Остановка Docker dev-окружения:

```bash
npm run dev:down
```

## Quality

```bash
npm run lint
npm run typecheck
```

## Current State

- Базовая архитектура и маршрутизация собраны.
- Разделы `services` и `articles` пока являются аккуратными заглушками.
- `Your Challenge` — основной активный кейс в разработке.
- В проекте уже настроены линтинг, typecheck и глобальный типограф.
