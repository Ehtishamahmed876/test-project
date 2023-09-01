import React from 'react';
import CircleWithText from './CircleButton';

const Navbar = () => {
  return (
    <nav className="relative">
      <img
        src="/assets/Assets/Slider-img.png"
        alt="Background Image"
        className="absolute inset-0 w-full h-full object-cover object-center "
      />
      <div className="container mx-auto relative z-10 flex justify-center  h-[45rem]">
        <ul className="flex space-x-16 p-5  lg:ml-96">
          <li><a href="#" className="text-white">Home</a></li>
          <li><a href="#" className="text-white">Pages</a></li>
          <li><a href="#" className="text-white">Shop</a></li>
          <li><a href="#" className="text-white">Blog</a></li>
          <li><a href="#" className="text-white">Contact Us</a></li>
          <li className=''>
            <div className='flex items-center gap-2'>
              <a href="#" className="text-white">ENG</a>
              <img src="/assets/Assets/down-arrow.png" alt="Down Arrow" />
            </div>
          </li>
          <li><a href="#" className="text-white"><img src="/assets/Assets/cart.png" alt="Cart" /></a></li>
          <li><a href="#" className="text-white"><img src="/assets/Assets/search.png" alt="Search" /></a></li>

        </ul>
        <div className="text-center text-white absolute inset-0 flex  lg:mr-[40rem] flex-col justify-center items-center">
          <div className='flex gap-3  flex-col text-left w-[28rem] justify-start'>
            <h1 className="text-2xl text-left ">Sale</h1>
            <div>
              <h2 className="text-6xl  font-bold font-serif mb-4">STOCK SALE</h2>
              <h2 className="text-6xl font-bold font-serif mb-4">UPTO 75% OFF</h2>
            </div>
            <CircleWithText text="SHOP NOW" textColor="white" />          
          </div>

        </div>
     

      </div>
      <div className="bg-white flex w-[70%] h-28 justify-end gap-8 rounded-tr-3xl  items-center absolute bottom-0 left-0">
          {/* Three sub-divs */}
          <div className="p-4">
            <h4 className="text-base font-semibold">Free Shiping</h4>
            <p>Fat new smallness few supposing</p>
          </div>
          <div className="p-4">
            <h4 className="text-base font-semibold">99% Statisfied Customer</h4>
            <p>Fat new smallness few supposing</p>
          </div>
          <div className="p-4">
            <h4 className="text-base font-semibold">Orignal Guranrteed</h4>
            <p>Fat new smallness few supposing</p>
          </div>
        </div>
      <div className="flex absolute bottom-8 right-60 gap-2">

        <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center text-white ml-4">
          <img src="/assets/Assets/left-arrow.png" alt="Arrow" />
        </div>
        <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center text-white ml-4">
          <img src="/assets/Assets/right-arrow.png" alt="Arrow" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
