import React from 'react'
import Breadcrumbs from '../Breadcrumb'

function CreateBoq() {
  return (
    <div className='w-full flex flex-col items-center bg-[#f5f7f9]'>
      <Breadcrumbs/>
      <div className='text-gray-800 text-2xl mt-10 font-serif'>Create Boq</div>
      <div className='grid grid-cols-2 mt-20 gap-8 '>

        <div className='flex flex-col'>
          <label >Choose the Theme:</label>
          <select className='border-2 border-gray-400 rounded-lg h-10' name="theme" id="theme_select" >
            <option  value="disabled_theme" >Select</option>
          </select>
        </div>


        <div className='flex flex-col'>
          <label >Choose the Builder:</label>
          <select className='border-2 border-gray-400 rounded-lg h-10' name="builder" id="theme_select" >
            <option value="disabled_theme" >Select</option>
          </select>
        </div>


        <div className='flex flex-col'>
          <label >Choose the Project:</label>
          <select className='border-2 border-gray-400 rounded-lg h-10' name="project" id="theme_select" >
            <option value="disabled_theme" >Select</option>
          </select>
        </div>


        <div className='flex flex-col'>
          <label >Choose the Phase,Block no. and Floor Plan:</label>
          <select className='border-2 border-gray-400 rounded-lg h-10' name="fplan" id="theme_select" >
            <option value="disabled_theme" >Select</option>
          </select>
        </div>


        <div className='flex flex-col'>
          <label >Name of Choise</label>
          <select className='border-2 border-gray-400 rounded-lg h-10' name="choise" id="theme_select" >
            <option value="disabled_theme" >Select</option>
          </select>
        </div>


        <div className='flex flex-col'>
          <label >Boq Name</label>
          <span className='border-2 border-gray-400 rounded-lg h-10' name="boqname" id="theme_select" >
            
          </span>
        </div>

      </div>
      <div className='mt-16 bg-[#cecece] w-[15%] text-white flex justify-center p-2 rounded-md '>
        <button>
          Sumbit
        </button>
      </div>
    </div>
  )
}

export default CreateBoq