import React from 'react';

const Status = ({ imgState, value, materialState, Status }) => {
  return (
    <div className='flex flex-col sm:flex-row justify-between mb-4 sm:mb-0 w-[100%] '>
      <div className='w-[90%] sm:w-64  bg-gray-900 text-white '>
        <div className='flex justify-between w-[90%]'>
          <div>
            <img src={imgState} alt="" className='w-10 h-10 mt-3 ml-4' />
          </div>
          <div className='flex flex-col mt-3 items-center'>
            <span className='text-2xl sm:text-3xl'>{value}</span>
            <span className='text-sm sm:text-base font-bold'>{materialState}</span>
          </div>
          <div className='text-xs font-thin mr-2'>{Status}</div>
        </div>
      </div>
    </div>
  );
};

export default Status;