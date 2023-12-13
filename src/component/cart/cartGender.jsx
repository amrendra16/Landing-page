import React from 'react';

const CartGender = ({ maleIconn, femaleIconn, gender1, gender2, value1, value2, percentage1, percentage2 }) => {
  return (

    <div className='flex justify-around cart h '>
    <div className='cart-1 h-auto w-64 mx-5  bg-gray-900 text-white '>
        <div className='flex justify-around font-thin mt-1'>
          <div className='flex items-center mb-4 sm:mb-0 flex-col'>
            <img src={maleIconn} alt="" className='w-8 h-8 mr-2' />
            <div className='text-[10px] font-bold'>
              <div>{gender1}</div>
              <div>{value1}</div>
              <div className='font-thin text-xs text-[10px]'>{percentage1}</div>
            </div>
          </div>
          <div className='flex items-center flex-col'>
            <img src={femaleIconn} alt="" className='w-8 h-8 mr-2' />
            <div className='text-[10px] font-bold'>
              <div>{gender2}</div>
              <div>{value2}</div>
              <div className='font-thin text-xs text-[10px]'>{percentage2}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartGender;
