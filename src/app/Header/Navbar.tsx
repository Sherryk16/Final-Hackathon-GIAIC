import React from 'react'
import Link from 'next/link'
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className='bg-white flex items-center justify-around mb-5'>
        <div className='font-bold text-[34px] '><h1>Hekto</h1></div>
        <div>
            <ul className='flex gap-4 text-black font-medium text-[16px]'>
             <Link href={'/'}><li className='hover:text-pink-600'> Home </li></Link>
             <Link href={'/Pages'}><li className='hover:text-pink-600'>Pages</li></Link>
            <Link href={'/Pages/ShopList'}><li className='hover:text-pink-600'>Products </li></Link>
            <Link href={'/Pages/Blog'}><li className='hover:text-pink-600'>Blog </li></Link>
             <Link href={'/Pages/ShopList'}><li className='hover:text-pink-600'>Shop </li></Link>
             <Link href={'/Contact'}><li className='hover:text-pink-600'>Contact </li></Link>
            </ul>
        </div>
        <div className='flex items-center  ' >
            <input className='rounded-md border border-gray-400' type="text" placeholder=''/>
           <button className='text-lg text-white bg-pink-600 h-7 flex items-center justify-center rounded-md w-8'><CiSearch /></button>
        </div>
    </div>
  )
}

export default Navbar