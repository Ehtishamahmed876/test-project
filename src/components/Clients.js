import React from 'react';

const Clients = () => {
  return (
    <>
    <div className="hidden lg:flex justify-center py-20 border-b-2 items-center gap-20 h-[300px]">
      <img
        src="/assets/Assets/logo1.png" // Replace with the path to your client logo images
        alt="Client Logo 1"
        className="w-24 h-24 mx-2"
      />
      <img
        src="/assets/Assets/logo2.png" // Replace with the path to your client logo images
        alt="Client Logo 2"
        className="w-24 h-24 mx-2"
      />
      <img
        src="/assets/Assets/logo3.png" // Replace with the path to your client logo images
        alt="Client Logo 3"
        className="w-24 h-24 mx-2"
      />
      <img
        src="/assets/Assets/logo4.png" // Replace with the path to your client logo images
        alt="Client Logo 4"
        className="w-24 h-24 mx-2"
      />
      <img
        src="/assets/Assets/logo5.png" // Replace with the path to your client logo images
        alt="Client Logo 5"
        className="w-24 h-24 mx-2"
      />
      <img
        src="/assets/Assets/logo6.png" // Replace with the path to your client logo images
        alt="Client Logo 6"
        className="w-24 h-24 mx-2"
      />
    </div>
       <div className=" flex lg:hidden justify-center py-20 border-b-2 items-center gap-5 lg:gap-20 h-[300px]">
       <img
         src="/assets/Assets/logo1.png" // Replace with the path to your client logo images
         alt="Client Logo 1"
         className="h-12 w-12  lg:w-24 lg:h-24 mx-2"
       />
       <img
         src="/assets/Assets/logo2.png" // Replace with the path to your client logo images
         alt="Client Logo 2"
         className="h-12 w-12  lg:w-24 lg:h-24 mx-2"
       />
       <img
         src="/assets/Assets/logo3.png" // Replace with the path to your client logo images
         alt="Client Logo 3"
         className="h-12 w-12   lg:w-24 lg:h-24 mx-2"
       />
       {/* <img
         src="/assets/Assets/logo4.png" // Replace with the path to your client logo images
         alt="Client Logo 4"
         className="w-24 h-24 mx-2"
       />
       <img
         src="/assets/Assets/logo5.png" // Replace with the path to your client logo images
         alt="Client Logo 5"
         className="w-24 h-24 mx-2"
       />
       <img
         src="/assets/Assets/logo6.png" // Replace with the path to your client logo images
         alt="Client Logo 6"
         className="w-24 h-24 mx-2"
       /> */}
     </div>
    </>

  );
};

export default Clients;
