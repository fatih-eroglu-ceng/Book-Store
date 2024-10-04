import useSWR from 'swr'

interface FetchOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
  headers?: Record<string, string>
  body?: any
}

const fetcher = async ([url, options]: [string, FetchOptions]) => {
  const { method = 'GET', headers, body } = options

  const response = await fetch(url, {
    method,
    headers: headers || { 'Content-Type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined
  })

  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  return response.json()
}

const useApi = (url: string | null, options: FetchOptions = { method: 'GET' }) => {
  const { data, error, isValidating: isLoading } = useSWR(url ? [url, options] : null, fetcher)

  return {
    data,
    error,
    isLoading
  }
}

export default useApi
