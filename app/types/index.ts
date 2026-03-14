export interface Cta {
  label: string
  to: string
}

export interface BotFeature {
  id: string
  name?: string
  title?: string
  description: string
  icon: string
  isPremium?: boolean
  is_premium?: boolean
}

export interface PricingPlan {
  id: string
  name: string
  price: string
  period: 'monthly' | 'annually'
  description: string
  features: string[]
  isPopular: boolean
  limitContacts: number
}

export interface IntegrationApp {
  id: string
  name: string
  logo: string
  description: string
  category: string
}

export interface HeroContent {
  badgeText: string
  headline: string
  highlightedText: string
  subline: string
  primaryCta: Cta
  secondaryCta: Cta
}

export interface PageData {
  hero: HeroContent
  features: {
    title: string
    description: string
    list: BotFeature[]
  }
  integrations: {
    title: string
    description: string
    list: IntegrationApp[]
  }
  pricing: {
    title: string
    description: string
    list: PricingPlan[]
  }
}

export interface ApiResponse<T> {
  success: boolean
  data: T
  message?: string
}

export interface BotStatus {
  isActive: boolean
  uptime: string
  contacts: number
}
