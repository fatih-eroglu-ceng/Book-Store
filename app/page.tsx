import Carousel from './components/Carousel';
import React from 'react';
import Categories from './components/HomeCategories';

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <main className="w-full">
        {/* Banner (Carousel) Section */}
        <section className="py-10 px-14 w-full max-w-7xl mx-auto">
          <Carousel />
        </section>

        {/* Categories Section */}
        <section className="px-14 w-full mx-auto">
          <Categories />
        </section>
      </main>

      <footer></footer>
    </div>
  );
}
//TODO: Src klasörü koy /app te sadece page olanlar (routing) gerisi /src içinde olabilir