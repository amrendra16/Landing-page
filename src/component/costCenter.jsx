import React from 'react';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts';

const CostCenter = () => {
  const data = [
    {
      name: 'Food',
      pv: 63,
    },
    {
      name: 'Non-food',
      pv: 71,
    },
    {
      name: 'Services',
      pv: 17,
    },
  ];

  return (
    <div className='flex flex-col sm:flex-row justify-between mb-4 sm:mb-0 cart'>
      <div className='w-full sm:w-64   bg-gray-900 text-white'>
        <h1 className='text-xl sm:text-2xl'>Cost Center</h1>
        <div className='w-full sm:w-1/2 '>
          <BarChart width={250} height={300} data={data} margin={{ top: 5 }}>
            <XAxis dataKey="name" className='text-xs' />
            <YAxis />
            <Tooltip labelClassName='text-red-900' />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default CostCenter;
