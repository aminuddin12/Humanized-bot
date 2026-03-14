import type { ApiResponse } from '~/types'

export default defineEventHandler(async (event): Promise<ApiResponse<unknown>> => {
  try {
    const slug = getRouterParam(event, 'slug')
    
    return {
      success: true,
      data: {
        title: `Page ${slug}`,
        content: '<p>Dynamic content from backend.</p>'
      },
      message: 'CMS page retrieved'
    }
  } catch (_error) {
    const statusMessage = (_error as { statusMessage?: string }).statusMessage || 'Failed to retrieve page'
    return {
      success: false,
      message: statusMessage,
      data: null
    }
  }
})
