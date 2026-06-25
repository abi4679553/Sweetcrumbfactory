import React from 'react'

function Header() {

  return (

    <div className='bg-[#F7F1E8] flex flex-wrap  justify-between  gap-5 p-4 '>
      <div className='flex text-3xl gap-2 ml-20 font-bold'>
        <p className='text-[#3A2215] hover:text-[#D97A42] duration-300'>Sweet Crumb </p>
        <p className='text-[#D97A42]'>Factory</p>
      </div>
      <div className='flex flex-wrap  gap-10 ml-[35%] text-xl  justify-between mt-4 '>
        <p className='hover:text-[#D97A42] hover:border-b-2 hover:border-[#D97A42] pb-[2px] ` cursor-pointer`'>HOME</p>
        <p className='hover:text-[#D97A42] hover:border-b-2 hover:border-[#D97A42] pb-[2px] ` cursor-pointer`'>ABOUT </p>
        <p className='hover:text-[#D97A42] hover:border-b-2 hover:border-[#D97A42] pb-[2px] ` cursor-pointer`'>CONTACT</p>
      </div>
      <div>
        <button className='bg-[#4A2200] text-[#FFFFFF] p-4 px-5 mr-32 hover:bg-[#D97A42] duration-300 '>ORDER NOW</button>
      </div>


    </div>
  )
}

export default Header