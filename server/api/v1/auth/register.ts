import { hashPassword } from '../../../utils/auth'
import prisma from '../../../utils/prisma'
import type { ApiResponse } from '~/types'

export default defineEventHandler(async (event): Promise<ApiResponse<any>> => {
  const body = await readBody(event)

  if (!body.email || !body.password) {
    throw createError({ statusCode: 400, statusMessage: 'Email and password required' })
  }

  const existingUser = await prisma.user.findUnique({
    where: { email: body.email }
  })

  if (existingUser) {
    throw createError({ statusCode: 409, statusMessage: 'User already exists' })
  }

  const passwordHash = await hashPassword(body.password)

  const user = await prisma.user.create({
    data: {
      email: body.email,
      password: passwordHash,
      name: body.name || null
    }
  })

  return {
    success: true,
    data: {
      id: user.id,
      email: user.email
    },
    message: 'User registered successfully'
  }
})
