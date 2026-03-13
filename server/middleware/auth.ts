import { verifyToken } from '../utils/auth'

export default defineEventHandler(async (event) => {
  // Only protect /api/v1 paths, excluding public/auth routes
  const path = getRequestPath(event)
  const isProtected = path.startsWith('/api/v1/') && 
                      !path.startsWith('/api/v1/auth/') && 
                      !path.startsWith('/api/v1/public/')

  if (!isProtected) return

  const authHeader = getRequestHeader(event, 'Authorization')
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized: Missing or invalid token'
    })
  }

  const token = authHeader?.split(' ')[1]

  if (!token) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized: Malformed token'
    })
  }

  const decoded = verifyToken(token)

  if (!decoded) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized: Session expired or invalid'
    })
  }

  // Attach user context to event
  event.context.user = decoded
})
