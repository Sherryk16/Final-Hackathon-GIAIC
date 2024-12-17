import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="container mx-auto flex">
        
        <aside className="w-1/4 bg-white p-4 border border-gray-200 rounded-md">
          <h2 className="text-lg font-semibold mb-4">Product Brand</h2>
          <ul className="mb-6">
            <li className="mb-2">
              <input type="checkbox" id="brand1" className="mr-2" />
              <label htmlFor="brand1">Brand A</label>
            </li>
            <li className="mb-2">
              <input type="checkbox" id="brand2" className="mr-2" />
              <label htmlFor="brand2">Brand B</label>
            </li>
            <li className="mb-2">
              <input type="checkbox" id="brand3" className="mr-2" />
              <label htmlFor="brand3">Brand C</label>
            </li>
          </ul>

          <h2 className="text-lg font-semibold mb-4">Discount Offers</h2>
          <ul className="mb-6">
            <li className="mb-2">
              <input type="checkbox" id="offer1" className="mr-2" />
              <label htmlFor="offer1">Up to 20%</label>
            </li>
            <li className="mb-2">
              <input type="checkbox" id="offer2" className="mr-2" />
              <label htmlFor="offer2">Up to 50%</label>
            </li>
            <li className="mb-2">
              <input type="checkbox" id="offer3" className="mr-2" />
              <label htmlFor="offer3">Up to 70%</label>
            </li>
          </ul>

          <h2 className="text-lg font-semibold mb-4">Rating Items</h2>
          <ul className="mb-6">
            <li className="mb-2">
              <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
            </li>
            <li className="mb-2">
              <span className="text-yellow-500">⭐⭐⭐⭐</span>
            </li>
            <li className="mb-2">
              <span className="text-yellow-500">⭐⭐⭐</span>
            </li>
          </ul>
        </aside>

    
        <main className="flex-1 ml-6">
          <h2 className="text-2xl font-semibold mb-4">Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        
            {Array(12)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="bg-white p-4 border border-gray-200 rounded-md"
                >
                  <img
                    src={'shoplist7.png'}
                    alt=''
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-lg font-semibold">Product {index + 1}</h3>
                  <p className="text-sm text-gray-500 mb-2">Short description</p>
                  <div className="text-red-500 font-bold">
                    $99.99{' '}
                    <span className="line-through text-gray-500">$129.99</span>
                  </div>
                  <div className="mt-2 text-yellow-500">⭐⭐⭐⭐⭐</div>
                </div>
              ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;