import type { ApiResponse } from '~/types'

export default defineEventHandler(async (_event): Promise<ApiResponse<unknown>> => {
  try {
    const plans = [
      {
        name: 'Free',
        price: '0',
        limit_contacts: 100,
        features: ['1 Bot', 'Standard AI']
      },
      {
        name: 'Pro',
        price: '29',
        limit_contacts: 5000,
        features: ['Unlimited Bots', 'Advanced AI', 'CRM Integration']
      }
    ]

    return {
      success: true,
      data: plans,
      message: 'Pricing plans retrieved successfully'
    }
  } catch (_error) {
    const statusMessage = (_error as { statusMessage?: string }).statusMessage || 'Failed to retrieve pricing'
    return {
      success: false,
      message: statusMessage,
      data: null
    }
  }
})
