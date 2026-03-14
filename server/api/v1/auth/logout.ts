import type { ApiResponse } from '~/types'

export default defineEventHandler(async (_event): Promise<ApiResponse<unknown>> => {
  return {
    success: true,
    data: null,
    message: 'Logged out successfully'
  }
})
