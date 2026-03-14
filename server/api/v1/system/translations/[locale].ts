import type { ApiResponse } from '~/types'

export default defineEventHandler(async (event): Promise<ApiResponse<unknown>> => {
  try {
    const locale = getRouterParam(event, 'locale')
    
    return {
      success: true,
      data: {
        welcome: locale === 'id' ? 'Selamat Datang' : 'Welcome'
      },
      message: 'Translations retrieved'
    }
  } catch {
    return {
      success: false,
      message: 'Failed to retrieve translations',
      data: null
    }
  }
})
