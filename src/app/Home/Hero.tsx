import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import DiscountSection from './Discount'
import TopCategories from './Top'
import CustomDiv from './Custom'
import FurnitureBanner from './Banner'
import Blog from './Blog'

const Hero = () => {
    return (
      <div>
      <div className="mb-5">
        <FurnitureBanner />
      </div>
    
      <div className="text-[#1A0B5B] text-[32px] md:text-[42px] font-semibold flex justify-center mb-5">
        Featured Products
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-8">
        {[
          { src: "/chair1.png", name: "Cantiliver Chair", code: "0353536", price: "$42.00" },
          { src: "/chair2.png", name: "Cantiliver Chair", code: "0353536", price: "$42.00" },
          { src: "/chair3.png", name: "Cantiliver Chair", code: "0353536", price: "$42.00" },
          { src: "/chair4.png", name: "Cantiliver Chair", code: "0353536", price: "$42.00" },
        ].map((item, index) => (
          <div
            key={index}
            className="w-full max-w-[270px] h-auto bg-slate-200 p-4 hover:scale-105 transition-transform mx-auto"
          >
            <div className="w-full aspect-square flex justify-center items-center bg-gray-100">
              <Image src={item.src} width={178} height={178} alt={item.name} />
            </div>
            <p className="mt-3 text-center font-serif text-[18px] text-pink-600">
              {item.name}
            </p>
            <p className="mt-1 text-center text-[14px] font-mono text-[#2F1AC4]">
              Code: {item.code}
            </p>
            <p className="text-center text-[14px] font-sans text-[#2F1AC4]">
              {item.price}
            </p>
          </div>
        ))}
      </div>
    
      <div className="text-[#1A0B5B] text-[32px] md:text-[42px] font-semibold flex justify-center mb-5 mt-10">
        Latest Products
      </div>
    
      <ul className="flex justify-center items-center gap-3 text-sm md:text-base">
        <Link href="/" className="hover:text-pink-600 hover:underline">
          New Arrival
        </Link>
        <Link href="/" className="hover:text-pink-600 hover:underline">
          Best Seller
        </Link>
        <Link href="/" className="hover:text-pink-600 hover:underline">
          Feature
        </Link>
        <Link href="/" className="hover:text-pink-600 hover:underline">
          Special Offer
        </Link>
      </ul>
    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-8 mt-8">
        {[
          { src: "/chair12.png", name: "Comfort HandyCraft", price: "$41.00", discount: "$65.00" },
          { src: "/chair13.png", name: "Comfort HandyCraft", price: "$41.00", discount: "$65.00" },
          { src: "/chair14.png", name: "Comfort HandyCraft", price: "$41.00", discount: "$65.00" },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-slate-200 p-4 rounded-lg hover:scale-105 transition-transform"
          >
            <div className="flex justify-center items-center">
              <Image src={item.src} width={223} height={229} alt={item.name} />
            </div>
            <div className="flex justify-between items-center mt-3">
              <p className="text-sm md:text-base">{item.name}</p>
              <div className="flex gap-3 text-sm md:text-base">
                <p>{item.price}</p>
                <p className="text-pink-600 line-through">{item.discount}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    
      <div className="text-[#1A0B5B] text-[32px] md:text-[42px] font-serif flex justify-center mt-10 mb-5">
        What Shopex Offers
      </div>
    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 sm:px-8">
        {[
          { src: "/truck.png", title: "24/7 Support", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
          { src: "/coin.png", title: "Easy Returns", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
          { src: "/badge.png", title: "Quality Guarantee", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
          { src: "/dial.png", title: "Customer Support", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-slate-200 p-4 rounded-lg flex flex-col items-center text-center"
          >
            <Image src={item.src} width={65} height={65} alt={item.title} />
            <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
            <p className="mt-3 text-sm text-slate-500">{item.description}</p>
          </div>
        ))}
      </div>
    
      <div className="mt-10">
        <DiscountSection />
        <TopCategories />
        <CustomDiv />
        <Blog />
      </div>
    </div>
    
    )
}

export default Hero