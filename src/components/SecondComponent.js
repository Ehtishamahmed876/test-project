import React from 'react';
import CircleWithText from './CircleButton';

const TwoDivsWithContent = () => {
  return (
    <div className="bg-white py-32">
      <div className="  flex flex-col lg:flex-row gap-4 lg:gap-0 justify-center items-center">
        {/* First div */}
        <div className="bg-cover bg-center w-96 lg:w-[32rem] h-72 lg:h-96 mr-4 relative">
          <img src="/assets/Assets/men-coll.png" alt="First Background" className="absolute  inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 flex flex-col justify-center items-end p-8">
            <div  className='flex flex-col gap-5'>
            <div>

            <h2 className="text-3xl font-bold font-serif text-black">Men's Causal</h2>
            <h2 className="text-3xl font-bold font-serif text-black">Fashion Style</h2>
            </div>

            <CircleWithText text="VIEW ALL" textColor="black" />          
            
            </div>

          </div>
        </div>
        
        {/* Second div */}
        <div className="bg-cover bg-center w-96 lg:w-[32rem] h-72 lg:h-96 ml-4 relative">
          <img src="/assets/Assets/women-coll.png" alt="Second Background" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 flex flex-col justify-center items-start p-8">
            <div  className='flex flex-col gap-5'>
            <div>

            <h2 className="text-3xl font-bold font-serif text-black">Women's Causal</h2>
            <h2 className="text-3xl font-bold font-serif text-black">Fashion Style</h2>
            </div>

            <CircleWithText text="VIEW ALL" textColor="black" />          
            
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoDivsWithContent;
