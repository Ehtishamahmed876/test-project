import React, { useState } from 'react';
import CircleWithText from './CircleButton';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="relative font-serif h-[70%]">
      <img
        src="/assets/Assets/Slider-img.png"
        alt="Background Image"
        className="absolute inset-0 w-full h-full object-cover object-center "
      />
      <div className=" mx-auto relative z-10 flex justify-center  h-[50rem]">
        <ul className='flex text-left gap-4 p-4 absolute top-4 right-4 z-20 lg:hidden'>
        <li><a href="#" className="text-white"><img src="/assets/Assets/cart.png" alt="Cart" /></a></li>
        
        <li className="">
              <button
                onClick={toggleNavbar}
                className=""
              >
                <svg
                  className="h-6 w-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </li>
        </ul>
        <ul className="hidden  lg:flex  space-x-16 p-5  lg:ml-96">
          <li><a href="#" className="text-white cursor-pointer">Home</a></li>
          <li><a href="#" className="text-white cursor-pointer">Pages</a></li>
          <li><a href="#" className="text-white cursor-pointer">Shop</a></li>
          <li><a href="#" className="text-white cursor-pointer">Blog</a></li>
          <li><a href="#" className="text-white cursor-pointer">Contact Us</a></li>
          <li className=''>
            <div className='flex items-center gap-2'>
              <a href="#" className="text-white">ENG</a>
              <img src="/assets/Assets/down-arrow.png" alt="Down Arrow" />
            </div>
          </li>
          <li><a href="#" className="text-white"><img src="/assets/Assets/cart.png" alt="Cart" /></a></li>
        
          <li><a href="#" className="text-white"><img src="/assets/Assets/search.png" alt="Search" /></a></li>

        </ul>
     
        <div className="text-center text-white absolute inset-0 flex ml-40  lg:ml-0 lg:mr-[40rem] flex-col justify-center items-center">
          <div className='flex gap-3  flex-col text-left w-[28rem] justify-start'>
            <h1 className="text-lg  lg:text-2xl text-left ">Sale</h1>
            <div>
              <h2 className="text-2xl  lg:text-6xl  font-bold font-serif mb-4">STOCK SALE</h2>
              <h2 className="text-2xl lg:text-6xl font-bold font-serif mb-4">UPTO 75% OFF</h2>
            </div>
            <CircleWithText text="SHOP NOW" textColor="white" />          
          </div>

        </div>
     

      </div>
      <div className="bg-white  lg:hidden w-[70%] h-28 justify-end gap-16 rounded-tr-[4rem]  items-end absolute bottom-0 left-0">
          {/* Three sub-divs */}
          <div className="p-4">
            <h4 className="text-base font-semibold">Free Shiping</h4>
            <p>Fat new smallness few supposing</p>
          </div>
          {/* <div className="p-4">
            <h4 className="text-base font-semibold">99% Statisfied Customer</h4>
            <p>Fat new smallness few supposing</p>
          </div>
          <div className="p-4">
            <h4 className="text-base font-semibold">Orignal Guranrteed</h4>
            <p>Fat new smallness few supposing</p>
          </div> */}
        </div>
      <div className="bg-white hidden lg:flex w-[70%] h-28 justify-end gap-16 rounded-tr-[4rem]  items-center absolute bottom-0 left-0">
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

        <div className={`${isOpen ? "absolute block  top-14 w-[90%] bg-blue-500" : "hidden"} lg:hidden`}>
          <ul className='flex justify-around p-5'>
         <div>

        <li><a href="#" className="text-white">Home</a></li>
          <li><a href="#" className="text-white">Pages</a></li>
          <li><a href="#" className="text-white">Shop</a></li>
          <li><a href="#" className="text-white">Blog</a></li>
         </div>

          <div>

          <li><a href="#" className="text-white">Contact Us</a></li>
          <li className=''>
            <div className='flex items-center gap-2'>
              <a href="#" className="text-white">ENG</a>
              <img src="/assets/Assets/down-arrow.png" alt="Down Arrow" />
            </div>
          </li>
          {/* <li><a href="#" className="text-white"><img src="/assets/Assets/cart.png" alt="Cart" /></a></li> */}
        
          <li className=''><a href="#" className="text-white"><img src="/assets/Assets/search.png" alt="Search" /></a></li>
          </div>

          </ul>

        </div>
      <div className="hidden  lg:flex absolute bottom-8 right-60 gap-2">

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
