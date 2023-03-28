import React from 'react'
import Swipertab from '../Swipertab';
import Loginbar from '../Loginbar';
import Carousel from '../test';
import Multicarousel from '../carousel/Multicarousel';
import demo from "../../assets/demo image.png"
import Breadcrumbs from '../Breadcrumb';
// import "../swiper.css"


function Dashboard() {

  return (
    <div className='h-full flex flex-col bg-gray-300 overflow-auto '>
      {/* <Loginbar/> */}
      <Breadcrumbs />
      {/* <div className=''>
      <Swipertab />
      </div> */}

      <Multicarousel/>

      <div className='flex justify-center relative p-6'>
        <span className='text-5xl font-bold text-black absolute top-[40%] z-10'> Coming Soon</span>
        <img className='opacity-40 w-10/12' alt='demo' src={demo} />
      </div>


    </div>
  )
}

export default Dashboard