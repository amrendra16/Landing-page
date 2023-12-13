
import React from 'react';

import { PieChart, Pie,  Cell } from 'recharts';




const Faith = () => {

    const data = [
        { name: 'Christian', value: 27 },
        { name: 'Hindu', value: 98},
        { name: 'Muslim', value: 10 },
       
      ];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

  return (
    <div>
        <div className='flex justify-between cart  '>
      <div className='cart-1 h-80 w-64 mx-5  bg-gray-900 text-white '>

        <h1>Faith</h1>
        <PieChart width={160} height={170} className='ml-10 mb-0'>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={65}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
            
        </PieChart>
        <span className='text-xs items-center flex justify-center m-0 text-thin mr-6'>Lagend</span> 

        <div className='flex justify-between mt-4 ml-2'>
          {data.map((item, index)=>
            
            <div className='flex flex-col items-center gap-1'>
            <span className='w-2 h-2 border '></span>
             <span className='text-xs text-blue-700 font-bold mt-1'>{item.name}</span> 
             <span className='text-lg'>{item.value}</span>
             <span className='text-xs'>{Math.round((item.value/137)*100)}%</span> 
            </div>
            
          )}
            

            


        </div>


      </div>
      </div>
    </div>
  )
}

export default Faith
