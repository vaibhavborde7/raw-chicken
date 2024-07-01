'use client'
import React from 'react';

const AboutUsComponent: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start p-6 md:p-12 bg-white">
      <div className="w-full md:w-1/2 h-full ">
        <img src="/roosters.jpg" alt="Raw Chicken" className=" h-full object-cover" />
      </div>
      <div className="w-full md:w-1/2 md:pl-8 mt-6 md:mt-0">
        <h2 className="text-red-600 text-lg font-semibold mb-2">About Us</h2>
        <h3 className="text-gray-900 text-2xl md:text-3xl font-bold mb-4">
          Traditional & Modern Raw Chicken Services Since 1975
        </h3>
        <p className="text-gray-700 mb-6">
          We provide truly fresh and healthiest, chemical-free raw chicken, cleaned, cut and delivered 
          straight to everyone's kitchen since 1975. That's our key mission. So from sourcing to delivery, 
          we don't cut any corner.
        </p>
        <div className="grid grid-cols-2 gap-4">
          {/* <div className="relative   bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
            <div className="absolute top-0 left-0 w-full h bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 opacity-80"></div>
            <div className="relative z-10 p-4">
              <h4 className="text-red-600 text-3xl">20+</h4>
              <p className="text-black">Years Experience</p>
            </div>
          </div> */}
          {/* <div className="relative w-full h-64">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 opacity-80"></div>
            <div className="relative z-10 p-4">
              <h4 className="text-white text-3xl">89+</h4>
              <p className="text-black">Professional Awards</p>
            </div>
          </div> */}
          <div className=' bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 p-2 rounded text-center text-white'>
            <h1 className='text-2xl font-bold'>20+</h1>
            <p>Years of Experience</p>
          </div>
          <div className=' bg-gradient-to-r from-green-400 via-purple-500 to-blue-500 p-2 rounded text-center text-white'>
            <h1 className='text-2xl font-bold'>89+</h1>
            <p>Varieties of Chicken</p>
          </div>
          <div className=' bg-gradient-to-r from-green-400 via-purple-500 to-red-900  rounded text-center text-white'>
            <h1 className='text-2xl font-bold'>100%</h1>
            <p>VQuality Assurance</p>
          </div>
          <div className=' bg-gradient-to-r from-purple-500 via-green-500 to-red-500  rounded text-center text-white'>
            <h1 className='text-2xl font-bold'>99.99%</h1>
            <p>On Time Deliveries</p>
          </div>
         
         
        </div>
      </div>
    </div>
  );
};

export default AboutUsComponent;
