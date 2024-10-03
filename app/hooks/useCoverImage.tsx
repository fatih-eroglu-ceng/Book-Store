import useSWR from 'swr'

const fetcher = async (url: string, fileName: string) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ fileName })
  })

  if (!response.ok) {
    throw new Error('Failed to fetch cover image')
  }

  const coverData = await response.json()
  return coverData.action_product_image?.url || null
}

const GetCoverImage = (fileName: string | null) => {
  const {
    data: coverImageUrl,
    error,
    isValidating: isLoading
  } = useSWR(fileName ? [`${process.env.NEXT_PUBLIC_API_BASE_URL}/cover_image`, fileName] : null, ([url, fileName]) =>
    fetcher(url, fileName)
  )

  return {
    coverImageUrl,
    error,
    isLoading
  }
}

export default GetCoverImage
