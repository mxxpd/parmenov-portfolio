# Portfolio Project — Claude Reference

## Owner

**Максим Парменов** — UX/UI и продуктовый дизайнер.
Специализация: сервисные продукты любой сложности (трекеры, аналитика, финтех, мобильные и веб-сервисы). Не занимается лендингами и e-commerce.

---

## Назначение проекта

Личный сайт-портфолио. Планируемые разделы:

| Раздел | Описание |
|---|---|
| Главная | Landing с представлением |
| Кейсы | Детальные страницы кейсов |
| Сервисы | Услуги дизайнера |
| Статьи | Блог |
| Курсы | Продажа курсов (в перспективе) |
| CMS | Управление кейсами и статьями прямо на сайте |
| Админка | CRUD через CMS-интерфейс |
| Авторизация | Для доступа к CMS |

---

## Текущий стек

```
Frontend:   Nuxt 4, Vue 3, TypeScript, Tailwind CSS v4
Backend:    Nuxt Nitro, TypeScript
Runtime:    Node 22-alpine (Docker)
```

## Планируемый стек (не внедрять сейчас, только контекст)

```
Data:       PostgreSQL, Drizzle ORM, Drizzle Kit, pg, Zod
Auth:       Nuxt Auth Utils, Nuxt Security
CMS:        Tiptap
Media:      @nuxt/image, MinIO
Testing:    Vitest
Infra:      Docker, Docker Compose, Mailpit, Node.js
```

---

## Структура проекта

```
d:/PROJECTS/pf/
├── app/
│   ├── assets/
│   │   ├── css/main.css          # Design tokens + Tailwind v4 base
│   │   └── icons/                # SVG-иконки (logo.svg, plug.svg)
│   ├── components/
│   │   ├── AppButton.vue         # Универсальная кнопка/ссылка
│   │   ├── TypoText.vue          # Текстовый враппер с тегом
│   │   ├── cases/
│   │   │   ├── Card.vue          # Карточка кейса (grid, тег overlayed на обложке) → CasesCard
│   │   │   └── Hero.vue          # Hero-карточка кейса (горизонтальная) → CasesHero
│   │   ├── header/
│   │   │   ├── Header.vue        # Sticky header (glass morphism)
│   │   │   ├── HeaderLogo.vue    # Логотип + имя
│   │   │   ├── HeaderNav.vue     # Навигация (Главная/Кейсы/Сервисы/Статьи)
│   │   │   └── HeaderActions.vue # Переключатель темы + кнопка контакта
│   │   └── hero/
│   │       └── Hero.vue          # Hero-секция главной
│   ├── composables/
│   │   ├── useTheme.ts           # Light/dark тема (localStorage + system pref)
│   │   └── useTypograf.ts        # Обёртка над $typo плагином
│   ├── layouts/
│   │   └── default.vue           # Основной лейаут: Header + <slot>, max-width 1480px
│   ├── pages/
│   │   ├── index.vue             # Главная страница
│   │   └── cases/
│   │       ├── index.vue         # Список кейсов (hero + 3-col grid)
│   │       ├── [slug].vue        # Заглушка детальной страницы кейса (noindex)
│   │       └── nova-bank.vue     # ВРЕМЕННЫЙ — визуальный референс дизайн-системы, не трогать
│   └── plugins/
│       └── typograf.ts.disabled  # Типограф (отключён, включить при необходимости)
├── public/
│   └── favicon.svg
├── nuxt.config.ts
├── package.json
├── Dockerfile                    # Multi-stage: dev / build / production
├── docker-compose.yml            # Production
├── docker-compose.dev.yml        # Development (HMR, volume mounts)
└── DEPLOY.md
```

---

## Дизайн-система (`app/assets/css/main.css`)

### Примитивы

**Цвета:**
- `--peach-*` (50–700) — основной брендовый цвет (тёплый персиковый/терракот)
- `--ink-*` (0–900) — серая шкала
- `--sand-*` — фоновые нейтральные оттенки
- Status: `--green-*`, `--red-*`, `--amber-*`, `--blue-*` (50, 200, 600, 700)

**Типографика:**
- Шрифт: `Onest` (Google Fonts, wght 400–800)
- Токены: `--font-size-*`, `--font-weight-*`, `--line-height-*`
- Семантика: `--text-display`, `--text-h1`..`--text-h4`, `--text-body` (17px), `--text-body-sm` (15px), `--text-label` (12px), `--text-caption` (11px)

**Пространство:** `--spacing-1` (4px) .. `--spacing-15` (120px)

**Радиусы:** `--radius-xs` (4px) .. `--radius-full` (9999px)

**Тени:** `--shadow-100` .. `--shadow-400`

### Семантические токены

```css
/* Фон */
--color-bg-canvas, --color-bg-surface, --color-bg-surface-muted,
--color-bg-inverse, --color-bg-accent, --color-bg-accent-muted

/* Текст */
--color-text-primary, --color-text-secondary, --color-text-tertiary,
--color-text-inverse, --color-text-accent

/* Бренд */
--color-brand-primary, --color-brand-muted, --color-brand-soft,
--color-brand-strong, --color-brand-contrast

/* Границы */
--color-border-subtle, --color-border-default,
--color-border-strong, --color-border-accent

/* Статусы */
--color-success-bg/border/text, --color-error-bg/border/text,
--color-warning-bg/border/text, --color-info-bg/border/text
```

### Тёмная тема

Управляется через `data-theme="dark"` на `<html>`. Все семантические токены переопределены. Переключение: `useTheme()` composable + script в `<head>` (предотвращает FOUC).

---

## Компоненты — паттерны

### AppButton.vue

```vue
<AppButton
  label="Текст"
  variant="primary" | "ghost"
  size="sm" | "md" | "lg"
  :icon="true"
  iconPosition="left" | "right"
  href="/url"  <!-- если указан href — рендерится как <a>, иначе <button> -->
/>
```

Слот для иконки: `#icon`. По умолчанию использует PlugIcon (plug.svg).

### TypoText.vue

```vue
<TypoText text="Текст" tag="h1" className="..." />
```

### useTheme()

```typescript
const { theme, preference, setTheme } = useTheme()
// theme: 'light' | 'dark' (resolved)
// preference: 'light' | 'dark' (stored)
// setTheme('dark') → обновляет data-theme + localStorage
```

---

## Важные замечания

- **`cases/nova-bank.vue`** — временный файл, демонстрирует дизайн-систему. Не удалять, не рефакторить, пропускать при изучении проекта.
- **`typograf.ts.disabled`** — плагин типографа отключён (`.disabled` в расширении). Активировать переименованием в `.ts` когда понадобится обработка русских текстов.
- **`AppIcon.vue`** — удалён. Если встречается в коде — нужно реализовать или заменить.
- **Нет `app.vue`** — Nuxt использует авто-обнаружение страниц.
- **Нет `tsconfig.json`** — генерируется Nuxt автоматически.
- **`arrow-up-right.svg`** — иконка стрелки. Без `width`/`height` атрибутов (управляется CSS), с `overflow="visible"` и `fill="currentColor"`. Авто-импортируется через `vite-svg-loader` как Vue-компонент.
- **`vite-svg-loader`** — находится в `dependencies` (не devDependencies!), т.к. нужен Nuxt/jiti при загрузке конфига. Не переносить обратно в devDependencies.
- **Кейсы** — данные кейсов хранятся прямо в `pages/cases/index.vue`. Компоненты `CasesHero` и `CasesCard` авто-импортируются из `components/cases/`.

---

## Запуск

```bash
# Локально
npm run dev:local

# В Docker (dev)
npm run dev

# Production
npm run docker:prod
```

---

## Навигация (HeaderNav.vue)

```
/ → Главная
/cases → Кейсы
/services → Сервисы
/articles → Статьи
```
