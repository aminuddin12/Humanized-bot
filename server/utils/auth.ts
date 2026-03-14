import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const AUTH_SECRET = process.env.AUTH_SECRET || 'humanized-secret-key-2026'
const TOKEN_EXPIRY = '24h'

export const hashPassword = async (password: string) => {
  return await bcrypt.hash(password, 10)
}

export const comparePassword = async (password: string, hash: string) => {
  return await bcrypt.compare(password, hash)
}

export const generateToken = (payload: string | object | Buffer) => {
  return jwt.sign(payload, AUTH_SECRET, { expiresIn: TOKEN_EXPIRY })
}

export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, AUTH_SECRET)
  } catch {
    return null
  }
}
