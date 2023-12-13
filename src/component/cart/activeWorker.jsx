import React from 'react';

const ActiveWorker = ({ activeWorker, Arrow, percentage, iconn, value }) => {
  return (
    <div className='flex flex-col sm:flex-row justify-between mb-4 sm:mb-0 '>
      <div className='w-full sm:w-64   bg-gray-900 text-white'>
        <div className='flex justify-between font-thin mt-1'>
          <div className='text-xs ml-2'>{activeWorker}</div>
          <div className='flex items-center'>
            <span className='pr-1'>
              <img src={Arrow} alt="" className='w-3 h-2' />
            </span>
            <span className='font-thin text-xs'>{percentage}</span>
          </div>
        </div>

        <div className='flex items-center mt-2'>
          <img src={iconn} alt="" className='w-12 h-12 mx-3' />
          <span className='font-bold text-3xl mx-3'>{value}</span>
        </div>
      </div>
    </div>
  );
};

export default ActiveWorker;
