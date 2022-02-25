import React, { useState } from 'react';
import logo from '../../images/logo.png';
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const NavbarItem = ({title , classProp})=>{
  return(
    <li className={`mx-4  cursor-pointer ${classProp}`}>{title}</li>
  )
}

const Navbar = () => {
  const [toggle , setToggle] = useState(true);
  console.log(toggle)
  
  return (
    <nav className='w-full flex md:justify-center justify-between item-center p-4'>
      <div className='md:flex-[0.5] flex-initial justify-center items-center'>
        <img src={logo} alt='logo' className='w-32 cursor-pointer' />
      </div>
      <ul className='text-white md:flex list-none hidden flex-row justify-between items-center flex-initial'>
        {["Market" , "Exchange","Rate","Tutorials"].map((item, index)=>(
          <NavbarItem key={item+index} title={item}/>
        ))}
          <li className='bg-[#2952e3] px-2 py-2 rounded-full cursor-pointer hover:bg-[#2546bd]'>Login</li>
      </ul>
      <div className='flex relative text-white'>
          {toggle && (
            <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={()=> setToggle(false)}/>
          )}
          {!toggle && (
            <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={()=> setToggle(true)}/>
          )}
          {!toggle && (
            <ul className='z-10 top-0 -right-2 p-3 w-[50vw] h-screen shadow-2xl  list-none flex-row justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in'>
              {/* <li className='text-xl w-full my-2'>
                <AiOutlineClose onClick={()=> setToggle(true)}/>
              </li> */}
              {["Market" , "Exchange","Rate","Tutorials"].map((item, index)=>(
          <NavbarItem key={item+index} title={item} classProp="my-2 text-lg"/>
        ))}
            </ul>
          )}

      </div>
    </nav>
  )
}

export default Navbar