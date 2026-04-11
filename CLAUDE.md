# Portfolio Project - Claude Reference

## Owner

**Максим Парменов** — Product дизайнер.

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
- контактная модалка
- сервисы
- статьи

В перспективе:
- CMS для управления кейсами и статьями
- админка
- авторизация

## Current Stack

```text
Frontend: Nuxt 4, Vue 3, TypeScript, SCSS (sass-embedded)
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
|  |  |- styles/
|  |  |  |- main.scss              ← точка входа, только @use
|  |  |  |- base/                  ← токены, reset, base, dark theme
|  |  |  |- layouts/               ← _default.scss
|  |  |  `- components/            ← по одному файлу на компонент
|  |  |     |- _app-button.scss
|  |  |     |- _app-field.scss
|  |  |     |- _app-tag.scss
|  |  |     |- _contact-form.scss
|  |  |     |- _contact-modal.scss
|  |  |     |- _placeholder-image.scss
|  |  |     |- header/
|  |  |     |- hero/
|  |  |     `- cases/
|  |  `- icons/
|  |- components/
|  |  |- AppButton.vue
|  |  |- AppInput.vue
|  |  |- AppSelect.vue
|  |  |- AppTag.vue
|  |  |- AppTextarea.vue
|  |  |- ContactForm.vue
|  |  |- ContactModal.vue
|  |  |- PlaceholderImage.vue
|  |  |- TypoText.vue
|  |  |- cases/
|  |  |  |- Card.vue
|  |  |  |- Hero.vue
|  |  |  `- your-challenge/        ← секции детального кейса
|  |  |- header/
|  |  `- hero/
|  |- composables/
|  |  |- useCases.ts               ← только логика, данные в const/
|  |  |- useModal.ts               ← глобальное состояние контактной модалки
|  |  |- useScrollReveal.ts
|  |  |- useTheme.ts
|  |  `- useTypograf.ts
|  |- const/
|  |  `- cases.ts                  ← статические данные кейсов
|  |- layouts/default.vue
|  |- pages/
|  |  |- index.vue
|  |  |- services.vue
|  |  |- articles.vue
|  |  `- cases/
|  |     |- index.vue
|  |     |- [slug].vue
|  |     `- your-challenge.vue
|  |- plugins/
|  |  `- typograf.ts
|  `- types/
|     |- index.ts                  ← только re-export
|     `- case.ts                   ← типы по домену
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

- Данные по кейсам лежат в `app/const/cases.ts`, composable `useCases.ts` — только логика.
- Детальный кейс `your-challenge` собран из отдельных секций в `app/components/cases/your-challenge/`.
- `vite-svg-loader` должен оставаться в `dependencies`, потому что нужен Nuxt во время загрузки конфига.
- Типограф сейчас включён и работает глобально через директиву `v-typo` в `app/layouts/default.vue`.
- Для точечной типографики доступны `useTypograf()` и компонент `TypoText.vue`.
- Контактная модалка подключена глобально в `app/layouts/default.vue`; открытие идёт через `useModal()`.
- SVG-иконки лежат в `app/assets/icons/` и подключаются как компоненты через `vite-svg-loader`.

## Design System

Токены в `app/assets/styles/base/`:

- `_vars.scss` — примитивы (цвета, типографика, spacing, радиусы, тени) + семантические алиасы
- `_dark.scss` — переопределения семантических токенов для `html[data-theme="dark"]`
- `_reset.scss` — box-sizing, margin/padding reset
- `_base.scss` — базовые стили html, body, a, button

Брендовая палитра: peach / ink / sand + status colors.  
Шрифт: Onest.  
Тёмная тема управляется через `data-theme="dark"` на `<html>`.

## Principles: Styles

**Архитектура:** глобальные SCSS-файлы, без Tailwind, без scoped-стилей в переиспользуемых компонентах.

**Когда scoped, когда глобальный файл:**
- Переиспользуемые компоненты (AppButton, Header, Card и т.д.) → глобальный SCSS-файл в `assets/styles/components/`
- Уникальные секции страниц (компоненты `cases/your-challenge/`) → `<style lang="scss" scoped>` внутри SFC

**Правило специфичности:** при конфликте между классом компонента (`.menu-btn`) и классом-модификатором из родителя (`.header__menu-btn`) используй контекстный селектор с двумя классами:
```scss
// Неправильно — одинаковая специфичность, побеждает тот, кто позже в файле
.header__menu-btn { display: none; }

// Правильно — два класса, всегда выигрывает
.header .header__menu-btn { display: none; }
```

**Добавление нового компонента:**
1. Создать `assets/styles/components/_имя-компонента.scss`
2. Добавить `@use 'components/имя-компонента'` в `main.scss`
3. Удалить `<style>` блок из Vue-файла

**Form controls:**
- Для новых форм использовать `AppInput`, `AppSelect`, `AppTextarea` и `AppButton`.
- Ошибки полей должны быть связаны через `aria-describedby`.
- Для модалок сохранять focus trap, автофокус при открытии и возврат фокуса на кнопку-триггер.

**Docker и node_modules:** при изменении `package.json` нужно пересоздать тома:
```bash
npm run dev:down
docker compose -f docker-compose.yml -f docker-compose.dev.yml down -v
npm run dev
```

## Principles: Types & Data

- Типы группируются по домену: `app/types/case.ts`, `app/types/user.ts` и т.д.
- `app/types/index.ts` — только re-export, не содержит деклараций
- Статические данные (массивы, конфиги) живут в `app/const/`, а не в composables
- Composables содержат только логику: фильтрацию, трансформацию, реактивность

## Principles: Components

- BEM-нейминг классов: `.block`, `.block__element`, `.block--modifier`
- `AppButton` поддерживает состояния `disabled` и `loading`, `nativeType`, `href`, слот иконки.
- `AppInput`, `AppSelect`, `AppTextarea` — базовые переиспользуемые поля для форм.
- `ContactModal` и `ContactForm` — глобальная контактная форма: валидация, success-состояние, сброс при закрытии.
- `PlaceholderImage.vue` — заглушка для медиа, принимает `label` и `height`
- `useScrollReveal` — паттерн с `bind`-функцией: `:ref="bind"` в шаблоне, `isVisible` реактивный

## Navigation

- `/` → главная
- `/cases` → кейсы
- `/services` → сервисы
- `/articles` → статьи

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

- Базовая архитектура, маршрутизация и дизайн-система собраны.
- Стили полностью переведены на SCSS (без Tailwind).
- Разделы `services` и `articles` пока являются аккуратными заглушками.
- `Your Challenge` — основной активный кейс, страница собрана из компонентов-секций.
- Настроены линтинг, typecheck и глобальный типограф.
- Главная обновлена под позиционирование “Product дизайнер”.
- Добавлена контактная модалка с валидацией, success-состоянием и доступностью.
- Добавлены переиспользуемые компоненты формы и кастомный select.
- Добавлено мобильное меню, которое выезжает под хедером.
- В карточках/hero кейсов есть микро-лоадер перехода.
