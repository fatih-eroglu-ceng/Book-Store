import type { Metadata } from "next";
import "./globals.css";
import Header from './components/Header';
import Providers from './components/Providers';

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
        <Providers>
          <Header />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
