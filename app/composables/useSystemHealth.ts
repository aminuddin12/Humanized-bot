export const useSystemHealth = () => {
const checkHealth = async () => {
const { data, error, status } = await useFetch('/api/v1/system/health')
return { data, error, status }
}
return { checkHealth }
}
