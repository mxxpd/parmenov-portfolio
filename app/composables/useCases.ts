import type { Case } from '~/types'

const cases: Case[] = [
  {
    slug: 'forkies',
    title: 'Forkies',
    type: 'HoReCa',
    description: 'Создание продукта для автоматизации ресторанного бизнеса — от заказов до аналитики',
    role: 'Product Designer',
    year: 2026,
    coverFrom: '#2D9E2B',
    coverTo: '#B6DDB4',
  },
  {
    slug: 'iona',
    title: 'TBD',
    type: 'AI Analytics',
    description: 'Аналитическая платформа на базе AI для структурированной работы с данными и инсайтами',
    role: 'Product Designer',
    year: 2026,
    coverFrom: '#E88A00',
    coverTo: '#FFD08A',
  },
  {
    slug: 'your-challenge',
    title: 'Your Challenge',
    type: 'iGaming',
    description: 'Пивот продукта, который вырастил базу пользователей в 13 раз за 2 месяца',
    role: 'Product Designer',
    year: 2025,
    coverFrom: '#C95228',
    coverTo: '#FABFA0',
  },
  {
    slug: 'adsource',
    title: 'TBD',
    type: 'AdTech',
    description: 'Платформа для управления рекламными кампаниями с фокусом на эффективность и прозрачность',
    role: 'UX/UI-дизайнер',
    year: 2024,
    coverFrom: '#1A6FD6',
    coverTo: '#A8CCF0',
  },
]

export function useCases() {
  const getCaseBySlug = (slug: string) => cases.find(c => c.slug === slug)

  return { cases, getCaseBySlug }
}
