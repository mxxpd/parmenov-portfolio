export type CaseStatus = 'published' | 'stub'

export type CasePageKind = 'custom' | 'stub'

export interface CaseSeoMeta {
  title: string
  description: string
  robots?: string
}

export interface CaseCard {
  slug: string
  title: string
  type: string
  description: string
  role: string
  year: number
  coverFrom: string
  coverTo: string
  coverImage?: string
}

export interface CaseEntry extends CaseCard {
  featured?: boolean
  status: CaseStatus
  page: CasePageKind
  seo: CaseSeoMeta
}
