import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white font-serif text-black py-8">
      <div className=" flex flex-col justify-center items-center">
        {/* First Section */}
        <div className="flex flex-wrap justify-center md:justify-between gap-20 items-center mb-8">
          {/* Left Div */}
          <div className="flex flex-col gap-4 w-96 text-center md:text-left  mb-4 md:mb-0">
            <h3 className="text-2xl font-semibold mb-2">About Us</h3>
            <p>We dominateion preference throunghly if.Joy deal pain view much her time Led young gay would now state. Pronounce we attention admitting</p>
            <div className="flex justify-center md:justify-start gap-4 mt-4">
              {/* Social Media Logos */}
              <img
                src="/assets/Assets/facebook.png"
                alt="Facebook"
                className="w-4 h-4 mr-2"
              />
              <img
                src="/assets/Assets/twitter.png"
                alt="Twitter"
                className="w-4 h-4 mr-2"
              />
              <img
                src="/assets/Assets/instagram.png"
                alt="Instagram"
                className="w-4 h-4 mr-2"
              />
              <img
                src="/assets/Assets/youtube.png"
                alt="Youtube"
                className="w-4 h-4"
              />
            </div>
          </div>

          {/* Right Divs */}
          <div className="  flex justify-center md:justify-between gap-10 space-x-4 mt-16">
            {/* Shopping Online */}
            <div className="flex flex-col gap-5 text-center md:text-left">
              <h4 className="font-semibold mb-2">Shopping Online</h4>
              <ul className='flex flex-col gap-4'>
                <li>Order Status</li>
                <li>Shopping & Delivery</li>
                <li>Returns</li>
                <li>Payment Options</li>
                <li>Contact Us</li>
              </ul>
            </div>

            {/* Information */}
            <div className="flex flex-col gap-5  text-center md:text-left">
              <h4 className="font-semibold mb-2">Information</h4>
              <ul className='flex flex-col gap-4'>
                <li>Gift Card</li>
                <li>Find a Store</li>
                <li>Newsletter</li>
                <li>Become a member</li>
                <li>Site feedback</li>
              </ul>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-5 text-center md:text-left">
              <h4 className="font-semibold mb-2">Contact</h4>
              <ul className='flex flex-col gap-4'>
                <li>Store@mall.com</li>
                <li>Tel: +91 1234 4567 89</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Second Section */}
        <div className="text-center mt-20">
          <p>&copy; Copyright. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
