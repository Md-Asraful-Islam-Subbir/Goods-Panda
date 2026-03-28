import React from 'react'
import logo from '../../assets/logo.png'
const Navbar = () => {
  return (
    <div className='flex items-center justify-between w-full pb-10'>
         <img src={logo} alt="Logo" className="w-32" />
        <div className='text-2xl font-bold cursor-pointer'>☰</div>
    </div>
  )
}

export default Navbar