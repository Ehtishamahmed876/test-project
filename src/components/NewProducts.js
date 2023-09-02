import React from 'react';

const NewProducts = () => {
  // Sample data for products
  const products = [
    {
      id: 1,
      name: 'Loius Vatius Bag',
      price: '$265.99',
      imageSrc: '/assets/Assets/New-product-1.png',
    },
    {
      id: 2,
      name: 'Loius Vatius Bag',
      price: '$265.99',
      imageSrc: '/assets/Assets/new-product-2.png',
    },
    {
      id: 3,
      name: 'Loius Vatius Bag',
      price: '$265.99',
      imageSrc: '/assets/Assets/new-product-3.png',
    },
    {
        id: 4,
        name: 'Loius Vatius Bag',
        price: '$265.99',
        imageSrc: '/assets/Assets/new-product-4.png',
      },
  ];

  return (
    <div className="bg-white py-8">
      <div className="   flex flex-col gap-10 justify-center items-center   ">
        {/* Heading and Show More button */}
        <div className="hidden  lg:flex font-serif   justify-around  items-center  mb-6">
          <h2 className="text-2xl mr-48  font-semibold">New Arrivals</h2>
          <button className="bg-white border rounded-3xl  p-2 px-4 ">Show More</button>
        </div>
        <h2 className="text-2xl lg:hidden text-center mr-48  font-semibold">New Arrivals</h2>
        
        {/* Product list */}
        <div className='flex justify-center items-center'>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-8">
          {products.map((product) => (
            <div key={product.id} className='flex flex-col gap-8' >
              <div className="bg-gray-100 rounded-lg p-4">
              <img
                src={product.imageSrc}
                alt={product.name}
                className="w-full h-72 object-cover rounded-md mb-2"
              />
              </div>
              <div className='flex flex-col gap-2'>
              <h3 className="text-lg  font-serif font-semibold">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
        </div>
        <button className="bg-white lg:hidden text-center border rounded-3xl  p-2 px-4 ">Show More</button>
      
      </div>
    </div>
  );
};

export default NewProducts
;