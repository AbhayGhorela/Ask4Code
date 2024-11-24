import React from 'react'
import { Link } from 'react-router-dom'
import { CiLogin } from "react-icons/ci";
import { VscSignIn } from "react-icons/vsc";
function Header() {
  return (
    <>
    <nav className='w-full h-[4rem] border-b border-black flex items-center justify-between '>
      <div className='w-[10rem] border '>
        <Link to='/'>
        <img className='mb-2' src="/ask4code.png" alt="" />
        </Link>
        
      </div>
      <div className='flex gap-12 font-semibold'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About Us</Link>
        <Link to='/contact'>Contact Us</Link>
      </div>
      <div className='flex gap-4 pr-3'>
        <button className='border border-black px-2 py-1.5 rounded-md bg-orange-600 font-semibold'>Login <CiLogin className='inline'/></button>
        <button className='border border-black px-2 py-1.5 rounded-md bg-blue-500 font-semibold'>Sign Up <VscSignIn className='inline'/></button>
      </div>
    </nav>
    </>
  )
}

export default Header