import React from 'react'
import {
    ComposedChart,
    
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
   
  } from 'recharts';

const Designation = () => {


    const data = [
        {
          name: 'Staff',
          value: 37,
    
        },
        {
          name: 'Officer',
          value: 29,
    
        },
        {
          name: 'Manager',

          value: 23,

        },
        {
          name: 'Senior Executive',

          value: 21,

        },
        {
          name: 'Executive',
          value: 18,

        },
        {
          name: 'Senior Officer',
        value: 17,

        },
        {
            name: 'President',
            value:3,
  
          },
          {
            name: 'Senior Manager',
            value: 2,
  
          },
          {
            name: 'Chife Executive',
            value: 1,
  
          },
      ];

  return (
    <div>
        <div className='flex justify-between cart h '>
      <div className='cart-1 h-80 w-64 mx-5  bg-gray-900  text-white '>
        <h1>Designation</h1>
      <ComposedChart
          layout="vertical"
          width={250}
          height={300}
          data={data}
          
          margin={{
            top: 3,
           
          }}
        >
          
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" className='text-xs'/>
          <Tooltip labelClassName='text-red-900'/>
          <Legend />
         
          <Bar dataKey="value" barSize={10} fill="#413ea0" />
         
        </ComposedChart>

        </div>
      </div>
    </div>
  )
}

export default Designation
