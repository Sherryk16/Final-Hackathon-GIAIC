// components/DiscountSection.jsx
import Image from "next/image";
export default function DiscountSection() {
    return (
      <div className="flex items-center justify-center px-4 py-10 lg:px-10 h-auto lg:h-[597px] mx-auto">
      <div className="relative bg-white shadow-lg rounded-lg flex flex-wrap lg:flex-nowrap items-center w-full max-w-[1214px]">
        {/* Left Section */}
        <div className="p-6 md:p-8 w-full lg:w-1/2">
          <div className="text-sm text-gray-600 space-x-3 mb-4 text-center lg:text-left">
            <span className="cursor-pointer hover:underline">Wood Chair</span>
            <span className="cursor-pointer hover:underline">Plastic Chair</span>
            <span className="cursor-pointer hover:underline">Sofa Collection</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center lg:text-left">
            20% Discount Of All Products
          </h2>
          <p className="text-gray-700 mb-6 text-center lg:text-left">
            Eams Sofa Compact
          </p>
          <ul className="space-y-2 mb-6 text-gray-700 text-sm md:text-base">
            <li className="flex items-center justify-center lg:justify-start">
              <span className="mr-2 text-green-600">✔</span> Material expose like metals
            </li>
            <li className="flex items-center justify-center lg:justify-start">
              <span className="mr-2 text-green-600">✔</span> Simple neutral colors
            </li>
            <li className="flex items-center justify-center lg:justify-start">
              <span className="mr-2 text-green-600">✔</span> Clear lines and geometric figures
            </li>
            <li className="flex items-center justify-center lg:justify-start">
              <span className="mr-2 text-green-600">✔</span> Material oppose like metals
            </li>
          </ul>
          <div className="flex justify-center lg:justify-start">
            <button className="bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-600">
              Shop Now
            </button>
          </div>
        </div>
    
        {/* Right Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center relative">
          <div className="rounded-full bg-pink-100 w-48 h-48 md:w-72 md:h-72 absolute"></div>
          <Image
            src={'/discsofa.png'} // Replace with your actual image path
            alt="Eams Sofa Compact"
            width={72}
            height={72}
            className="relative w-48 h-48 md:w-72 md:h-72 object-cover"
          />
        </div>
      </div>
    </div>
    
    );
  }
  