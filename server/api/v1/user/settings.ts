import prisma from '../../../utils/prisma'
import type { ApiResponse } from '~/types'

export default defineEventHandler(async (event): Promise<ApiResponse<any>> => {
  const user = event.context.user

  const userData = await prisma.user.findUnique({
    where: { id: user.id },
    select: {
      id: true,
      email: true,
      name: true,
      createdAt: true
    }
  })

  return {
    success: true,
    data: userData,
    message: 'User settings retrieved'
  }
})
