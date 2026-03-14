import type { ApiResponse } from '~/types'

export default defineEventHandler(async (_event): Promise<ApiResponse<unknown>> => {
  try {
    return {
      success: true,
      data: {
        status: 'connected',
        qr: null
      },
      message: 'Bot connection status'
    }
  } catch (_error) {
    const statusMessage = (_error as { statusMessage?: string }).statusMessage || 'Failed to get bot status'
    return {
      success: false,
      message: statusMessage,
      data: null
    }
  }
})
