'use client'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import Link from 'next/link'
import useApi from '../hooks/useApi'

const FavoritesDropdown = () => {
  const favoriteBooks = useSelector((state: RootState) => state.favorites.favorites)

  return (
    <div className='absolute right-0 mt-2 w-64 bg-white border border-gray-300 rounded-lg shadow-lg z-50'>
      {favoriteBooks.length > 0 ? (
        <ul className='p-4'>
          {favoriteBooks.map(book => {
            const { data: coverImageUrl, error, isLoading } = useApi(
              book.cover ? `${process.env.NEXT_PUBLIC_API_BASE_URL}/cover_image` : null,
              {
                method: 'POST',
                body: { fileName: book.cover }
              }
            )

            return (
              <li key={book.id} className='mb-2 last:mb-0'>
                <Link href={{ pathname: `/book/${book.id}`, query: { cover: book.cover } }} className='flex items-center space-x-4'>
                  {isLoading ? (
                    <div className='w-12 h-12 bg-gray-200 rounded'></div>
                  ) : error ? (
                    <div className='w-12 h-12 bg-red-500 text-white flex items-center justify-center'>X</div>
                  ) : (
                    <img
                      src={coverImageUrl?.action_product_image?.url ?? 'images/cover.png'}
                      alt={book.name}
                      className='w-12 h-12 object-cover rounded'
                    />
                  )}
                  <div className='flex flex-col'>
                    <span className='font-semibold'>{book.name}</span>
                    <span className='text-gray-500 text-sm'>{book.author}</span>
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      ) : (
        <div className='p-4 text-gray-500'>No favorite books yet.</div>
      )}
    </div>
  )
}

export default FavoritesDropdown
