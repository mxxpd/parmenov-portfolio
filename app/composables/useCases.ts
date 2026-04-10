import type { CaseCard, CaseEntry } from '~/types/case'
import { cases } from '~/const/cases'

export function useCases() {
  const getCaseBySlug = (slug: string) => cases.find(item => item.slug === slug)
  const getFeaturedCase = () => cases.find(item => item.featured) ?? cases[0]
  const toCaseCard = (item: CaseEntry): CaseCard => ({
    slug: item.slug,
    title: item.title,
    type: item.type,
    description: item.description,
    role: item.role,
    year: item.year,
    coverFrom: item.coverFrom,
    coverTo: item.coverTo,
  })

  return {
    cases,
    getCaseBySlug,
    getFeaturedCase,
    toCaseCard,
  }
}
