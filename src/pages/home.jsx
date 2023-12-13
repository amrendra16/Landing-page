import React from 'react'
import Header from '../component/header'
import Sidebar from '../component/sidebar'
import Mainfile from '../component/mainfile'

const Home = () => {
  return (
    <div>
      <Header/>
      <div className='flex  '>
      <Sidebar/>

      <div className='w-[95%] bg-gray-700 text-white'><Mainfile/></div>
    </div>
    </div>
  )
}

export default Home
