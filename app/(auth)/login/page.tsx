'use client'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function LoginPage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/')
    }
  }, [status])

  return (
    <div className='flex h-screen'>
      <div
        className='hidden md:block w-1/2 bg-cover bg-center'
        style={{ backgroundImage: 'url(/images/Login.png)' }}
      ></div>

      <div className='w-full md:w-1/2 flex flex-col justify-center items-center p-10 bg-white'>
        <img src='/images/Logo.png' alt='Logo' width={150} height={150} className='mb-10' />
        <h1 className='text-3xl font-bold mb-10'>Login</h1>

        <button
          onClick={() => signIn('google', { callbackUrl: '/' })}
          className='flex items-center bg-[#EF6B4A] hover:bg-red-500 text-white font-bold py-2 px-4 rounded mb-6'
        >
          Sign in with Google
        </button>

        <button className='text-[#6251DD] text-xl font-bold py-2 px-4 rounded hover:underline'>
          Sign Up
        </button>
      </div>
    </div>
  )
}
