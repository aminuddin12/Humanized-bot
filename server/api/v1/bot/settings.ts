import prisma from '../../../utils/prisma'
import type { ApiResponse } from '~/types'

export default defineEventHandler(async (event): Promise<ApiResponse<any>> => {
  const user = event.context.user

  const botSettings = await prisma.botSetting.findMany({
    where: { userId: user.id }
  })

  return {
    success: true,
    data: botSettings,
    message: 'Bot settings retrieved'
  }
})
