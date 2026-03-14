import type { ApiResponse } from '~/types'

export default defineEventHandler(async (event): Promise<ApiResponse<unknown>> => {
  try {
    const method = event.method
    
    if (method === 'GET') {
      return {
        success: true,
        data: [
          { id: 1, name: 'John Doe', phone: '62812345678' }
        ],
        message: 'Contacts retrieved'
      }
    }
    
    return {
      success: true,
      data: null,
      message: 'Contact updated'
    }
  } catch (_error) {
    const statusMessage = (_error as { statusMessage?: string }).statusMessage || 'Failed to process contacts'
    return {
      success: false,
      message: statusMessage,
      data: null
    }
  }
})
