import React from 'react'
import Cart from './cart/cart'
import usericon from "../assets/icons8-users-30.png"
import CartGender from './cart/cartGender'
import maleIcon from "../assets/male.png"
import femaleIcon from "../assets/woman.png"
import ActiveWorker from './cart/activeWorker'
import upicon from "../assets/up-arrows.png"
import activIcon from "../assets/postman.png"
import inactive from "../assets/lazy.png"
import downArrow from "../assets/down-arrow.png"
import Status from './cart/status'
import single from "../assets/man.png"
import married from "../assets/wedding.png"
import Divorsed from "../assets/teacher.png"
import location from "../assets/location.png"
import Faith from './faith'
import AgeGroup from './ageGroup'
import Designation from './designation'
import CostCenter from './costCenter'
import "./mainFile.css"


const Mainfile = () => {
  return (
    <div className='ml-10'>
    <div className='flex flex-col sm:flex-row items-center sm:items-start ml-5 mt-2 w-[89%] sm:w-95% '>
    <div className='mt-2 sm:mt-0 sm:mr-6'>
    <h3 className='font-bold text-base sm:text-lg lg:text-xl'>Hr Analytics Dashboard</h3>
    <div className='mt-1 text-xs sm:text-sm'>
      
      <span className='font-bold'>Home</span>
      <span className='ml-6 font-bold text-blue-600'>Dashboard</span>
    </div>
      </div>


      <div className="flex items-center justify-between w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mx-auto mt-2  ">
      <input
        type="text"
        placeholder="Search..."
        className="w-full px-4 py-2 rounded-full border focus:outline-none shadow-md"
      />
      </div>

      <div className="flex flex-wrap justify-center sm:justify-between mt-4 ">
  <button className="px-4 sm:px-5 h-8 sm:h-10 mt-2 sm:mt-0 py-1 sm:py-2 w-full sm:w-auto ml-4  border rounded bg-white text-black btn">
    Filter
  </button>
  <button className="px-2 sm:px-5 h-8 sm:h-10 mt-2 sm:mt-0 py-1 sm:py-2 w-full sm:w-auto  ml-4 border rounded bg-blue-600 text-white btn">
    Data
  </button>
  <button className="px-2 sm:px-5 h-8 sm:h-10 mt-2 sm:mt-0 py-1 sm:py-2 w-full sm:w-auto  ml-4 border rounded bg-blue-600 text-white btn">
    Analysis
  </button>
  <button className="px-2 sm:px-5 h-8 sm:h-10 mt-2  sm:mt-0 py-1 sm:py-2 w-full sm:w-auto ml-4  border rounded bg-blue-600 text-white btn">
    Search
  </button>
</div>

      </div>


  <div className='bg-gray-700 h-screen sm:h-auto w-[80%] flex sm:justify-between sm:items-center mt-3 '>
  <Cart title="Total Emp." value="151" icon={usericon}/>
  <CartGender maleIconn={maleIcon}femaleIconn={femaleIcon} gender1="Male" value1="115"
    percentage1="78%" value2="12" gender2="Female" percentage2="36%" />
  <ActiveWorker activeWorker="Active Worker" Arrow={upicon} percentage="96%" iconn={activIcon} value="139" />
  <div className='ml-5'>

  <ActiveWorker activeWorker="Inactive Worker" Arrow={downArrow} percentage="3%" iconn={inactive} value="13" />
  </div>

</div>



    <div className='mt-4 flex justify-between  '>
   
<div className=' sm:ml-5'>

    <Status imgState={single} value="51" materialState="Single" Status="Status"/>
</div>
<div className=' sm:mr-5 ml-5'>

    <Status imgState={married} value="99" materialState="Maried" Status="Status"/>
</div>
<div className=' sm:mr-5'>

    <Status imgState={Divorsed} value="1" materialState="Divorsed" Status="Status"/>
</div>
    <Status imgState={location} value="13" materialState="Locations" Status="#Locations"/>
   
   
   </div>

      <div className='mt-4 flex'>
        <Faith />
        <AgeGroup/>
        <Designation/>
        <div className='mr-20 bg-yellow-300'>

        <CostCenter/>
        </div>
      </div>
     

   </div>
  )
}

export default Mainfile