import React from 'react'
import Link from 'next/link';
import { FaPhoneAlt } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
const Head = () => {
  return (
    <div className='flex justify-around items-center h-[44px] bg-violet-600'>
        <div className='flex gap-10' >
            <div className='flex gap-2 items-center font-semibold text-white text-[16px]'><MdMailOutline className='text-lg'/>mhasanul@gmail.com</div>
            <div className='flex gap-2 items-center font-semibold text-white text-[16px]'> <FaPhoneAlt />0313245678</div>
        </div>

    <div className=''>
        <ul className='flex items-center text-white gap-4 text-[16px] font-semibold'>
            <Link href={'/'}><li>English</li></Link>
            <Link href={'/'}><li>USD</li></Link>
            <Link href={'/Login'}><li className='flex items-center gap-1'>Login <MdAccountCircle className='text-lg' /></li></Link>
            <Link href={'/'}><li className='flex items-center gap-1'>Wishlist <FaRegHeart className='text-lg' /> </li></Link>
            <Link href={'/'}><li className='flex items-center gap-1'><IoCartOutline className='text-lg' /></li></Link>
        </ul>
    </div>

    </div>
  )
}

export default Head