import React from 'react'

const Sidebar = () => {
  return (
      <div className='w-[13%] bg-black text-white h-[100%]'>
     <div className='items-center justify-center flex rounded-full h-20 w-20 mx-10 mt-2 border-2 border-indigo-50'>
        Male
     </div>
     <div className='text-green-200 flex items-center justify-center mt-2 text-xs font-bold'>
        Ismail Omeiza Mumin
     </div>
     <div className='flex items-center justify-center flex-col'>
        <div className='border border-b-4 w-20 mt-2 '></div>
        <div className='border border-b-2 w-10 mt-2 '></div>

        
     </div>
     
     <div className='flex items-center flex-col justify-center my-2 text-bg'>
     <div className='bg-gray-700 w-[100%] flex items-center justify-center h-7 text-white-900 font-bold'>
       Employee Details
     </div>
     <div className='mt-2 flex items-center justify-center flex-col'>
        <h1 className='font-bold'>Age</h1>
        <h2>22</h2>
     </div>
     <div  className='mt-2 flex items-center justify-center flex-col'>
        <h1 className='font-bold'>Religous Faith</h1>
        <h2>Hindu</h2>
     </div>
     <div  className='mt-2 flex items-center justify-center flex-col'>
        <h1 className='font-bold'>Nationality</h1>
        <h2>Indian</h2>
     </div>
     <div  className='mt-2 flex items-center justify-center flex-col'>
        <h1 className='font-bold'>Material State</h1>
        <h2>Single</h2>
     </div>
     <div  className='mt-2 flex items-center justify-center flex-col'>
        <h1 className='font-bold'>Department</h1>
        <h2>Software Engg</h2>
     </div>

     <div  className='mt-2 flex items-center justify-center flex-col'>
        <h1 className='font-bold'>Employment Status</h1>
        <h2>Active</h2>
     </div>
     <div  className='mt-2 flex items-center justify-center flex-col'>
        <h1 className='font-bold'>Mobail Phone</h1>
        <h2>8934896858</h2>
     </div>
     <div  className='mt-2 flex items-center justify-center flex-col'>
        <h1 className='font-bold'>Employment Year</h1>
        <h2>2023</h2>
     </div>
     </div>
      
</div>
    
  )
}

export default Sidebar
