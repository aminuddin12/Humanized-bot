import type { ApiResponse } from '~/types'

export default defineEventHandler(async (_event): Promise<ApiResponse<unknown>> => {
  try {
    const features = [
      {
        title: 'Smart Humanized Response',
        description: 'AI-powered chat that feels remarkably human.',
        icon: 'lucide:brain-circuit',
        is_premium: false
      },
      {
        title: 'Multi-Channel Support',
        description: 'Manage WhatsApp, Telegram, and Web from one place.',
        icon: 'lucide:message-square',
        is_premium: true
      }
    ]

    return {
      success: true,
      data: features,
      message: 'Public features retrieved successfully'
    }
  } catch (_error) {
    const statusMessage = (_error as { statusMessage?: string }).statusMessage || 'Failed to retrieve features'
    return {
      success: false,
      message: statusMessage,
      data: null
    }
  }
})
