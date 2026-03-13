import type { PricingPlan, ApiResponse } from '~/types'

export default defineEventHandler(async (event): Promise<ApiResponse<PricingPlan[]>> => {
  try {
    const plans: PricingPlan[] = [
      {
        id: 'tester',
        name: 'Tester',
        price: 'Free',
        period: 'monthly',
        description: 'Perfect for small projects or personal use.',
        features: ['1 Bot Instance', '100 Contacts', 'Basic NLP', 'Community Support'],
        isPopular: false,
        limitContacts: 100
      },
      {
        id: 'client',
        name: 'Client',
        price: '$29',
        period: 'monthly',
        description: 'Ideal for growing businesses and professionals.',
        features: ['3 Bot Instances', '1,000 Contacts', 'Advanced NLP', 'Priority Email Support', 'Analytics Dashboard'],
        isPopular: true,
        limitContacts: 1000
      },
      {
        id: 'developer',
        name: 'Developer',
        price: '$99',
        period: 'monthly',
        description: 'For power users needing unlimited scale and integration.',
        features: ['Unlimited Bot Instances', 'Unlimited Contacts', 'Full API Access', 'Custom Integrations', '24/7 Phone Support'],
        isPopular: false,
        limitContacts: 999999
      }
    ]

    return {
      success: true,
      data: plans,
      message: 'Pricing plans retrieved successfully'
    }
  } catch (error: any) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Internal Server Error',
      data: {
        success: false,
        message: error.message || 'Failed to retrieve pricing plans'
      }
    })
  }
})
