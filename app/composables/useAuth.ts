export const useAuth = () => {
  const user = useState('user', () => null)
  const token = useCookie('auth_token')

  const login = async (credentials: any) => {
    // In a real app, this would hit /api/v1/auth/login
    // const { data } = await useFetch('/api/v1/auth/login', { method: 'POST', body: credentials })
    
    // Mock success for UI rollout
    user.value = { name: 'Alan Digital', email: credentials.email }
    token.value = 'mock-jwt-token'
    return true
  }

  const register = async (userData: any) => {
    // In a real app, this would hit /api/v1/auth/register
    user.value = { name: userData.name, email: userData.email }
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
