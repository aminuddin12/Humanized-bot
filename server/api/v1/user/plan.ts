import type { ApiResponse } from '~/types'

interface UserPlan {
  plan: string
  limit: string
  isActive: boolean
}

export default defineEventHandler(async (event): Promise<ApiResponse<UserPlan>> => {
  // Mocking user subscription data
  const mockPlan: UserPlan = {
    plan: "Developer Pro",
    limit: "Unlimited",
    isActive: true
  }

  return {
    success: true,
    data: mockPlan,
    message: "User subscription plan retrieved successfully"
  }
})
