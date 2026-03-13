import type { ApiResponse } from '~/types'

export default defineEventHandler(async (event): Promise<ApiResponse<any>> => {
  const slug = getRouterParam(event, 'slug')

  // Mocking CMS page data based on slug
  const mockPages: Record<string, any> = {
    'about': {
      title: 'About Humanized Bot',
      blocks: [
        { type: 'hero', content: 'We build the best bot engine.' },
        { type: 'text', content: 'Our company was founded in 2026.' }
      ]
    },
    'terms': {
      title: 'Terms of Service',
      blocks: [
        { type: 'text', content: 'Usage of this bot is subject to...' }
      ]
    }
  }

  const page = mockPages[slug || '']

  if (!page) {
    throw createError({ statusCode: 404, statusMessage: 'Page not found' })
  }

  return {
    success: true,
    data: page,
    message: `Page ${slug} retrieved successfully`
  }
})
