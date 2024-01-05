import React from 'react'
import { IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
const Header = () => {
  return (
   <header className=''>
    <div className='header_top bg-[#f6f6f8] flex justify-between items-center w-full p-4 '>
        <div className="flex flex-1 px-4 items-center text-[#878787]">
        <IoCallOutline className='mx-2'/> <p className='mr-2'>+01 xxxxxxx</p><TfiEmail className='mx-2'/> <p className=''>claue@muzammil.com</p>
        </div>
        <div className="flex flex-1 justify-center text-[#878787]">
        <p className='flex'>Summer sale discount off <span className='text-[#ec0101]'>&nbsp;50%!&nbsp;</span><a href="#" className='text-black'> Shop Now</a></p>
        </div>
        <div className="flex-1 flex justify-end">
          <p>USD</p>
        </div>
    </div>

   </header>
  )
}

export default Header