# Parmenov Portfolio

Персональное портфолио на `Nuxt 4` с кейсами, сервисами и статьями.

Проект в активной разработке: базовая архитектура, дизайн-система, маршруты и первый подробный кейс уже есть, контент и разделы продолжают развиваться.

## Stack

- `Nuxt 4`
- `Vue 3`
- `TypeScript`
- `SCSS` (sass-embedded)
- `Typograf`
- `vite-svg-loader`

## Development

Установка зависимостей:

```bash
npm install
```

Запуск через Docker (основной режим):

```bash
npm run dev
```

Остановка:

```bash
npm run dev:down
```

## Build

```bash
npm run build
```

## Quality

```bash
npm run lint
npm run typecheck
```

## Routes

- `/` — главная
- `/cases` — список кейсов
- `/services` — заглушка раздела сервисов
- `/articles` — заглушка раздела статей
