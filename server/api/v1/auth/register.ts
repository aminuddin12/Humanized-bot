import { hashPassword } from '../../../utils/auth'
import prisma from '../../../utils/prisma'
import type { ApiResponse } from '~/types'

export default defineEventHandler(async (event): Promise<ApiResponse<unknown>> => {
  try {
    const body = await readBody(event)

    if (!body.email || !body.password || !body.name) {
      throw createError({ statusCode: 400, statusMessage: 'Missing required fields' })
    }

    const existingUser = await prisma.user.findUnique({
      where: { email: body.email }
    })

    if (existingUser) {
      throw createError({ statusCode: 409, statusMessage: 'User already exists' })
    }

    const hashedPassword = await hashPassword(body.password)

    const user = await prisma.user.create({
      data: {
        email: body.email,
        password_hash: hashedPassword,
        name: body.name
      }
    })

    return {
      success: true,
      data: {
        id: user.id,
        email: user.email,
        name: user.name
      },
      message: 'User registered successfully'
    }
  } catch (_error) {
    const statusMessage = (_error as { statusMessage?: string }).statusMessage || 'Registration failed'
    return {
      success: false,
      message: statusMessage,
      data: null
    }
  }
})
