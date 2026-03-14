import { comparePassword, generateToken } from '../../../utils/auth'
import prisma from '../../../utils/prisma'
import type { ApiResponse } from '~/types'

export default defineEventHandler(async (event): Promise<ApiResponse<unknown>> => {
  try {
    const body = await readBody(event)

    if (!body.email || !body.password) {
      throw createError({ statusCode: 400, statusMessage: 'Email and password required' })
    }

    const user = await prisma.user.findUnique({
      where: { email: body.email }
    })

    if (!user || !(await comparePassword(body.password, user.password_hash))) {
      throw createError({ statusCode: 401, statusMessage: 'Invalid credentials' })
    }

    const token = generateToken({ id: user.id, email: user.email })

    return {
      success: true,
      data: {
        token,
        user: {
          id: user.id,
          email: user.email,
          name: user.name
        }
      },
      message: 'Login successful'
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
