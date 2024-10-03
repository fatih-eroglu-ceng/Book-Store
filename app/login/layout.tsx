export default function LoginLayout({ children }: { children: React.ReactNode }) {
    
    return (
      <html lang="en">
        <head>
          <title>Login - Book Store</title>
        </head>
        <body>
          <main>
            {children}
          </main>
        </body>
      </html>
    );
  }
  