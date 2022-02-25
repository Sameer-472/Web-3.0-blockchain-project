import React from 'react';
import logo from '../../images/logo.png'

const Footer = () => {
  return (
    <div className='w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer'>
      <img src={logo} alt='logo'/>
      <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-white text-sm text-center">Come join us and hear for the unexpected miracle</p>
      <p className="text-white text-sm text-center font-medium mt-2">muhammadsameer2016@yahoo.com</p>
    </div>
    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-white text-left text-xs">Mr Marvel</p>
      <p className="text-white text-right text-xs">All rights reserved</p>
    </div>
    </div>
  )
}

export default Footer