import React from 'react'

function Header() {
  return (
    <header className='bg-[#EDE4D8] p-5 flex  justify-between '>
      <div className='text-[#4A2C1A] text-3xl font-bold hover:text-[#D97A42]'>Sweet Crumb <span className=' text-[#D97A42]'>Factory</span></div>

      <nav className='flex space-x-10 text-[#8B6F5A]  text-xl ml-[500px] mt-3 '> 
         <a className='hover:text-[#D97A42] hover:border-b-2 hover:border-[#D97A42] '>HOME</a> 
        <a className='hover:text-[#D97A42]  hover:border-b-2 hover:border-[#D97A42] '>ABOUT</a>
        <a className='hover:text-[#D97A42]  hover:border-b-2 hover:border-[#D97A42] '>CONTACT</a>
      </nav>
      <button className='text-[#FFFFFF] bg-[#4A2C1A] px-6 py-3 text-xl  mr-40 hover:bg-[#D97A42] '>ORDER NOW</button>





    </header>
  )
}

export default Header

    // <header className='flex justify-between px-3 w-full bg-amber-600 text-white py-3 items-center'>
    //     {/* Logo */}
    //     <div onClick={()=>window.location.href="/"} className='text-3xl font-bold'>Sweet Crumb <span className='text-black'>Factory</span></div>
    //     {/* Nav link */}
    //     <nav className='flex space-x-10'> 
    //       <a href='/' >Home</a>
    //       <a href='home' >About</a>
    //       <a href='service' >Service</a>
    //     </nav>
    //     {/* Button */}
    //     <button type='button' className='bg-black text-white py-2 px-5 rounded-lg font-semibold'>Order</button> 
    // </header>