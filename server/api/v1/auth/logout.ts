import type { ApiResponse } from '~/types'

export default defineEventHandler(async (event): Promise<ApiResponse<null>> => {
  // In a JWT setup, logout is primarily handled by the client (discarding token)
  // But we provide this endpoint for session invalidasi or logging purposes
  
  return {
    success: true,
    data: null,
    message: 'Logout successful'
  }
})
