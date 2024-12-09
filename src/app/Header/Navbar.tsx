import React from 'react'
import Link from 'next/link'
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="bg-white flex flex-wrap items-center justify-between px-4 py-3 md:justify-around mb-5">
  {/* Logo Section */}
  <div className="font-bold text-[24px] md:text-[34px]">
    <h1>Hekto</h1>
  </div>

  {/* Navigation Links */}
  <div className="w-full md:w-auto">
    <ul className="flex flex-wrap gap-4 text-black font-medium text-[14px] md:text-[16px] justify-center">
      <Link href="/">
        <li className="hover:text-pink-600 cursor-pointer">Home</li>
      </Link>
      <Link href="/Pages">
        <li className="hover:text-pink-600 cursor-pointer">Pages</li>
      </Link>
      <Link href="/Pages/ShopList">
        <li className="hover:text-pink-600 cursor-pointer">Products</li>
      </Link>
      <Link href="/Pages/Blog">
        <li className="hover:text-pink-600 cursor-pointer">Blog</li>
      </Link>
      <Link href="/Pages/ShopList">
        <li className="hover:text-pink-600 cursor-pointer">Shop</li>
      </Link>
      <Link href="/Contact">
        <li className="hover:text-pink-600 cursor-pointer">Contact</li>
      </Link>
    </ul>
  </div>

  {/* Search Input and Button */}
  <div className="flex items-center w-full md:w-auto mt-3 md:mt-0 justify-center md:justify-end gap-2">
    <input
      className="w-full md:w-[200px] rounded-md border border-gray-400 px-2 py-1 text-sm"
      type="text"
      placeholder="Search..."
    />
    <button className="text-lg text-white bg-pink-600 h-8 flex items-center justify-center rounded-md w-8">
      <CiSearch />
    </button>
  </div>
</div>

  )
}

export default Navbar