import React from 'react';
import './cart.css'; 

const Cart = ({ title, value, icon }) => {
  return (
    <div className='flex flex-col sm:flex-row justify-between ml-5 sm:mb-0'>
      <div className='w-full sm:w-64 bg-gray-900 text-white'>
        <div className='text-xs mx-2'>{title}</div>
        <div className='flex flex-col sm:flex-row items-center justify-center'>
          <div className='font-bold text-4xl sm:text-5xl h-13 sm:h-16 my-3 sm:my-0 ml-3 sm:ml-10'>
            {value}
          </div>
          <img
            src={icon}
            alt=""
            className='font-bold w-12 h-12 sm:w-16 sm:h-16 mx-3 sm:mx-6 my-3 sm:my-0'
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;
