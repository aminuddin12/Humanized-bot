import type { ApiResponse } from '~/types'

export default defineEventHandler(async (event): Promise<ApiResponse<any>> => {
  return {
    success: true,
    data: {
      plan: 'Professional',
      status: 'Active',
      nextBilling: '2026-04-13'
    },
    message: 'Subscription data retrieved'
  }
})
