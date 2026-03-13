import type { ApiResponse } from '~/types'

export default defineEventHandler(async (event): Promise<ApiResponse<any>> => {
  // Mocking CRM contacts for now
  const mockContacts = [
    { id: '1', name: 'John Doe', phone: '+62812345678', status: 'Active' },
    { id: '2', name: 'Jane Smith', phone: '+62812345679', status: 'Inactive' }
  ]

  return {
    success: true,
    data: {
      contacts: mockContacts,
      total: 2,
      page: 1
    },
    message: 'Contacts retrieved'
  }
})
