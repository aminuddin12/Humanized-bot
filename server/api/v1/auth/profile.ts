import prisma from '../../../utils/prisma'
import type { ApiResponse } from '~/types'

export default defineEventHandler(async (event): Promise<ApiResponse<unknown>> => {
  try {
    const user = event.context.user

    const userData = await prisma.user.findUnique({
      where: { id: user.id },
      select: {
        id: true,
        email: true,
        name: true,
        created_at: true,
        status: true
      }
    })

    if (!userData) {
      throw createError({ statusCode: 404, statusMessage: 'User not found' })
    }

    return {
      success: true,
      data: {
        id: userData.id,
        email: userData.email,
        name: userData.name,
        createdAt: userData.created_at,
        status: userData.status
      },
      message: 'Profile retrieved successfully'
    }
  } catch (_error) {
    const statusMessage = (_error as { statusMessage?: string }).statusMessage || 'Failed to retrieve profile'
    return {
      success: false,
      message: statusMessage,
      data: null
    }
  }
})
