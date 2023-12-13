import React from 'react';

const Header = () => {
  return (
    <div className='bg-black py-2 sm:py-3 md:py-4 lg:py-5 flex flex-col sm:flex-row justify-between font-bold w-[100%]'>
      <div className='text-blue-600 mx-[20%]'>
        Data With Decision &copy;
      </div>
      <div className='mx-3 sm:mx-5 md:mx-10 lg:mx-20'>
        <span className='text-blue-600 font-bold mr-3'>Current Data:</span>
        <span className='font-thin text-white'>Sunday, October 5, 2023</span>
      </div>
    </div>
  );
};

export default Header;
