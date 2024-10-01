import { useState, useEffect } from 'react'

const GetCoverImage = (coverFileName: string | null) => {
  const [coverImageUrl, setCoverImageUrl] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    if (coverFileName) {
      const fetchCoverImage = async () => {
        setIsLoading(true)
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/cover_image/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ fileName: coverFileName })
          })
          const coverData = await response.json()

          if (!coverData) {
            throw new Error('Failed to load cover image')
          }
          const coverUrl = coverData.action_product_image?.url
          if (coverUrl) {
            setCoverImageUrl(coverUrl)
          } else {
            setError('Cover image not found')
          }
        } catch (error) {
          setError((error as Error).message)
        } finally {
          setIsLoading(false)
        }
      }
      fetchCoverImage()
    }
  }, [coverFileName])

  return { coverImageUrl, error, isLoading }
}

export default GetCoverImage
