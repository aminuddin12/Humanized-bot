import { verifyToken } from '../utils/auth'

export default defineEventHandler(async (event) => {
  const path = getRequestPath(event)
  
  // Bypass untuk endpoint publik
  if (
    path.startsWith('/api/v1/system/health') || 
    path.startsWith('/api/v1/public') ||
    path.startsWith('/api/v1/auth/')
  ) {
    return
  }

  // Only protect other /api/v1 paths
  if (!path.startsWith('/api/v1/')) return

  const authHeader = getRequestHeader(event, 'Authorization')
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized: Missing or invalid token'
    })
  }

  const token = authHeader.split(' ')[1]

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
