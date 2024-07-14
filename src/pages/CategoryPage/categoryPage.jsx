import React from 'react';
import { Link } from 'react-router-dom';

const CategoryPage = () => {
  const categories = [
    { name: 'T-Shirts', gender: 'men' },
    { name: 'Shoes', gender: 'men' },
    { name: 'Dress', gender: 'women' },
    { name: 'Accessories', gender: 'women' },
    { name: 'Skirts', gender: 'women' },
  ];

  return (
    <div className="container mx-auto my-10 p-5">
      <h1 className="text-3xl font-bold text-center mb-10">Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <Link key={index} to={`/${category.gender}/${category.name.toLowerCase()}`}>
            <div className="p-10 border bg-gray-100 text-center rounded-lg shadow-lg hover:bg-gray-200 transition duration-300">
              <h2 className="text-xl font-semibold">{category.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
