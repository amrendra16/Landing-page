import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const AgeGroup = () => {
  const data = [
    { name: '50 to 60', value: 27 },
    { name: '41 to 50', value: 73 },
    { name: '31 to 40', value: 51 },
  ];
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'}>
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className='flex flex-col sm:flex-row justify-between mb-4 sm:mb-0'>
      <div className='w-full sm:w-64  bg-gray-900 text-white'>
        <h1>Age Groups</h1>

        <div className='w-full sm:w-1/2 mx-auto'>
          <PieChart width={180} height={140}>
            <Pie
              data={data}
              cx={60}
              cy={70}
              label={renderCustomizedLabel}
              innerRadius={40}
              outerRadius={60}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </div>

        <span className='text-xs flex justify-center mt-1 font-thin'>Legend</span>

        {data.map((item, index) => (
          <div className='flex justify-center mt-4' key={index}>
            <span className='w-2 h-2 border bg-[#0088FE] mt-2'></span>
            <span className='mx-2 mr-5 text-green-500'>{item.name}</span>
            <span className='mx-2 mr-5'>{item.value}</span>
            <span className='mx-2 mr-3'>{Math.round((item.value / 151) * 100)}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgeGroup;
