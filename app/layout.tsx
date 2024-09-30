import type { Metadata } from "next";
import "./globals.css";
import Header from './components/Header';
import ReduxProvider from './components/ReduxProvider';

export const metadata: Metadata = {
  title: "Book Store",
  description: "Book Store App",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Book Store</title>
      </head>
      <body>
        <ReduxProvider>
          <Header />
          <main>
            {children}
          </main>
        </ReduxProvider>
      </body>
    </html>
  );
}
