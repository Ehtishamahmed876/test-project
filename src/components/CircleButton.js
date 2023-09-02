import React from 'react';

const CircleWithText = ({ text, textColor }) => {


  return (
    <div className="flex items-center gap-20">
      <div className={`w-12 h-12 gap-2 rounded-full flex items-center bg-blue-500 justify-center text-${textColor} relative`} >
        <span className="absolute left-7 w-40">{text}</span>
      </div>
      <a href="/#" className={`text-${textColor}`}><img src="/assets/Assets/right-arrow.png" alt="Search" /></a>
    </div>
  );
};

export default CircleWithText;
