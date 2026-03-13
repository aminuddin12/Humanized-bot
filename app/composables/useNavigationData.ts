export const useNavigationData = () => {
  const menuItems = [
    { label: 'Home', to: '/', icon: 'i-fluent-home-24-filled' },
    { label: 'Features', to: '/#features', icon: 'i-fluent-sparkle-24-filled' },
    { label: 'Integrations', to: '/#integrations', icon: 'i-fluent-puzzle-piece-24-filled' },
    { label: 'Pricing', to: '/#pricing', icon: 'i-fluent-money-24-filled' },
    { label: 'Documentation', to: '/docs', icon: 'i-fluent-book-24-filled' }
  ]

  const actionButtons = [
    { label: 'Login', to: '/login', variant: 'ghost' },
    { label: 'Get Started', to: '/register', variant: 'primary' }
  ]

  return {
    menuItems,
    actionButtons
  }
}
