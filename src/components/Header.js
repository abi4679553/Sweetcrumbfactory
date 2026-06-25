import React from 'react'

function Header() {

  return (

    // <div className='bg-[#F7F1E8] flex flex-wrap  justify-between  gap-5 p-4 '>
    //   <div className='flex text-3xl gap-2 ml-20 font-bold'>
    //     <p className='text-[#3A2215] hover:text-[#D97A42] duration-300'>Sweet Crumb </p>
    //     <p className='text-[#D97A42]'>Factory</p>
    //   </div>
    //   <div className='flex flex-wrap  gap-10 ml-[35%] text-xl  justify-between mt-4 '>
    //     <p className='hover:text-[#D97A42] hover:border-b-2 hover:border-[#D97A42] pb-[2px] ` cursor-pointer`'>HOME</p>
    //     <p className='hover:text-[#D97A42] hover:border-b-2 hover:border-[#D97A42] pb-[2px] ` cursor-pointer`'>ABOUT </p>
    //     <p className='hover:text-[#D97A42] hover:border-b-2 hover:border-[#D97A42] pb-[2px] ` cursor-pointer`'>CONTACT</p>
    //   </div>
    //   <div>
    //     <button className='bg-[#4A2200] text-[#FFFFFF] p-4 px-5 mr-32 hover:bg-[#D97A42] duration-300 flex-wrap '>ORDER NOW</button>
    //   </div>


    // </div>

    <header className='flex justify-between px-3 w-full bg-amber-600 text-white py-3 items-center'>
        {/* Logo */}
        <div onClick={()=>window.location.href="/"} className='text-3xl font-bold'>Sweet Crumb <span className='text-black'>Factory</span></div>
        {/* Nav link */}
        <nav className='flex space-x-10'> 
          <a href='/' >Home</a>
          <a href='home' >About</a>
          <a href='service' >Service</a>
        </nav>
        {/* Button */}
        <button type='button' className='bg-black text-white py-2 px-5 rounded-lg font-semibold'>Order</button> 
    </header>



  )
}

export default Header