'use client';
import { signIn } from 'next-auth/react';

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <button
          onClick={() => signIn('google')}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
