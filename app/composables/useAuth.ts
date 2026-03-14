export interface User {
  name: string
  email: string
}

export const useAuth = () => {
  const user = useState<User | null>('user', () => null)
  const token = useCookie<string | null>('auth_token')

  const login = async (credentials: Record<string, unknown>) => {
    // Mock success for UI rollout
    user.value = { name: 'Alan Digital', email: credentials.email as string }
    token.value = 'mock-jwt-token'
    return true
  }

  const register = async (userData: Record<string, unknown>) => {
    user.value = { name: userData.name as string, email: userData.email as string }
    token.value = 'mock-jwt-token'
    return true
  }

  const logout = () => {
    user.value = null
    token.value = null
    navigateTo('/login')
  }

  return {
    user,
    token,
    login,
    register,
    logout,
    isAuthenticated: computed(() => !!token.value)
  }
}
