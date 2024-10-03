'use client'
import './globals.css'
import Header from './components/Header'
import Providers from './components/Providers'
import ProtectedLayout from './components/ProtectedLayout'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <title>Book Store</title>
      </head>
      <body>
        <Providers>
          <ProtectedLayout>
            <Header />
            <main>{children}</main>
          </ProtectedLayout>
        </Providers>
      </body>
    </html>
  )
}
