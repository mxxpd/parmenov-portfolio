# Parmenov Portfolio

Персональное портфолио на `Nuxt 4` с кейсами, сервисами и статьями.

Сейчас проект находится в стадии активной сборки: базовая архитектура, дизайн-система, маршруты и первый подробный кейс уже есть, а контент и отдельные разделы продолжают развиваться.

## Stack

- `Nuxt 4`
- `Vue 3`
- `TypeScript`
- `Tailwind CSS v4`
- `Typograf`
- `vite-svg-loader`

## Development

Установка зависимостей:

```bash
npm install
```

Основной локальный режим через Docker:

```bash
npm run dev
```

Локальный запуск без Docker:

```bash
npm run dev:local
```

Остановка dev-окружения Docker:

```bash
npm run dev:down
```

## Build

```bash
npm run build
```

## Quality Checks

```bash
npm run lint
npm run typecheck
```

## Routes

- `/` — главная
- `/cases` — список кейсов
- `/cases/your-challenge` — первый подробный кейс
- `/services` — заглушка раздела сервисов
- `/articles` — заглушка раздела статей

## Notes

- `nova-bank` остаётся временным визуальным референсом и не должен удаляться без отдельной причины.
- Типограф включён глобально через layout и также доступен точечно через `useTypograf()` и `TypoText`.
- Основной пользовательский кейс сейчас — `Your Challenge`.
