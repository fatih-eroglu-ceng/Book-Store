'use client'
import '../globals.css'
import { SessionProvider } from 'next-auth/react'
export default function LoginLayout({ children }: { children: React.ReactNode }) {
    
    return (
      <html lang="en">
        <head>
          <title>Login - Book Store</title>
        </head>
        <body>
          <SessionProvider>
          <main>
            {children}
          </main>
         </SessionProvider>
        </body>
      </html>
    );
  }
  