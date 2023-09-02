import React from 'react';

const BackImg = () => {
  return (
    <div className="relative h-[35rem] mt-20">
      {/* Background Image */}
      <img
        src="/assets/Assets/men-img.png" // Replace with your background image URL
        alt="Background"
        className="w-full h-full object-cover"
      />

      {/* Content Div */}
      <div className="absolute bottom-0 rounded-tl-[4rem] right-0 h-32 font-serif bg-white p-4 w-2/3">
        <div className='flex px-10 py-3 gap-16 justify-start items-center'>
        <div>
        <h2 className="text-xl font-semibold mb-2">New Collection</h2>
        <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-3xl hover:bg-blue-600 transition duration-300 ease-in-out">Shop Now</button>

        </div>
        </div>
     
      </div>
    </div>
  );
};

export default BackImg;
