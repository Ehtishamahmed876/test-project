import React from 'react';

const WhyChooseUs = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto text-center mb-20">
        <h2 className="text-xl  lg:text-3xl font-serif font-semibold">Why Should Choose Us?</h2>
      </div>

      <div className="flex justify-center flex-wrap font-serif items-center gap-6 ">
       {/* First Div */}
       <div className=" rounded-lg p-4 text-left  bg-white    md:mb-0 mb-4">
          <div className="bg-gray-200 w-20 h-20 border-b-4 rounded-b-lg border-b-blue-600  mb-4 flex items-center justify-center  ">
            <img src="/assets/Assets/truck.png" alt="Icon 2" className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
          <p>Fat new smellness new supposing</p>
        </div>

        {/* Second Div */}
        <div className="bg-white rounded-lg p-4 text-left    md:mb-0 mb-4 ml-0 md:ml-4">
          <div className="bg-gray-200  w-20 h-20 border-b-4  rounded-b-lg  border-b-blue-600 mb-4 flex items-center justify-center  ">
            <img src="/assets/Assets/pay.png" alt="Icon 1" className=" w-6 h-6" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Easy Payments</h3>
          <p>Fat new smellness new supposing</p>
        </div>
    
        {/* Third Div */}
        <div className="bg-white rounded-lg p-4 text-left    md:mb-0 mb-4 ml-0 md:ml-4">
          <div className="bg-gray-200  w-20 h-20 border-b-4  rounded-b-lg  border-b-blue-600  mb-4 flex items-center justify-center  ">
            <img src="/assets/Assets/shield.png" alt="Icon 3" className=" w-6 h-6 " />
          </div>
          <h3 className="text-xl font-semibold mb-2">Money Back Guarantee</h3>
          <p>Fat new smellness new supposing</p>
        </div>

        {/* Fourth Div */}
        <div className="bg-white rounded-lg p-4 text-left    md:mb-0 mb-4 ml-0 md:ml-4">
          <div className="bg-gray-200  w-20 h-20 border-b-4  rounded-b-lg  border-b-blue-600  mb-4 flex items-center justify-center  ">
            <img src="/assets/Assets/quality.png" alt="Icon 4" className=" w-6 h-6" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Finest Quality</h3>
          <p>Fat new smellness new supposing</p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
