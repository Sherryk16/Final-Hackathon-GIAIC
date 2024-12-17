"use client"
import Link from 'next/link';
import { MdMailOutline, MdAccountCircle } from 'react-icons/md';
import { FaPhoneAlt, FaRegHeart } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';
import { useState } from 'react';
import { HiOutlineMenu, HiX } from 'react-icons/hi';

const Head = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-violet-600">
      {/* Top Navbar */}
      <div className="flex justify-between items-center h-[44px] px-4 sm:px-8">
        <div className="flex gap-4 sm:gap-10">
          <div className="flex gap-2 items-center font-semibold text-white text-[16px]">
            <MdMailOutline className="text-lg" /> sherrry@gmail.com
          </div>
          
        </div>

        {/* Hamburger Icon */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white text-2xl focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <HiX /> : <HiOutlineMenu />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden sm:flex">
          <ul className="flex items-center text-white gap-4 text-[16px] font-semibold">
            <Link href={'/'}>
              <li>English</li>
            </Link>
            <Link href={'/'}>
              <li>USD</li>
            </Link>
            <Link href={'/Login'}>
              <li className="flex items-center gap-1">
                Login <MdAccountCircle className="text-lg" />
              </li>
            </Link>
            <Link href={'/'}>
              <li className="flex items-center gap-1">
                Wishlist <FaRegHeart className="text-lg" />
              </li>
            </Link>
            <Link href={'/'}>
              <li className="flex items-center gap-1">
                <IoCartOutline className="text-lg" />
              </li>
            </Link>
            <li className='flex items-center gap-1'>
            <FaPhoneAlt className="text-lg" /> 0313245678
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <ul className="flex flex-col items-center text-white gap-4 text-[16px] font-semibold bg-violet-600 p-4">
            <Link href={'/'}>
              <li>English</li>
            </Link>
            <Link href={'/'}>
              <li>USD</li>
            </Link>
            <Link href={'/Login'}>
              <li className="flex items-center gap-1">
                Login <MdAccountCircle className="text-lg" />
              </li>
            </Link>
            <Link href={'/'}>
              <li className="flex items-center gap-1">
                Wishlist <FaRegHeart className="text-lg" />
              </li>
            </Link>
            <Link href={'/'}>
              <li className="flex items-center gap-1">
                <IoCartOutline className="text-lg" />
              </li>
            </Link>
            <li className='flex items-center gap-1'>
            <FaPhoneAlt className="text-lg" /> 0313245678
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Head;
