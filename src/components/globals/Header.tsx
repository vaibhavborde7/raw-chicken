import React from 'react';

const Header: React.FC = () => {
  return (
   
      <div className="bg-red-500  p-5 flex justify-between  ">
        <h1 className="text-white">
          Raw chicken
        </h1>
        <div className="text-white flex space-x-6">
          <h1>
            Home
          </h1>
          <h1>
            About us
          </h1>
          <h1>
            Our services
          </h1>
          <h1>
            Testimonials
          </h1>
          <h1>
            Contact us
          </h1>
        </div>
      </div>
    
  );
}

export default Header;
