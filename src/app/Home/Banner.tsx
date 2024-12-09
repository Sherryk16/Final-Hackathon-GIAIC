import Image from "next/image";
export default function FurnitureBanner() {
    return (
      <div className="relative bg-white flex items-center justify-between px-14 py-16 lg:py-20 lg:px-20">
        {/* Left Section */}
        <div className="flex items-start gap-10">
          {/* Bulb Image */}
          <Image
            src={'/bulb.png'}
            alt="Bulb"
            className="w-[387px] object-contain"
          />
  
          {/* Text Section */}
          <div className="max-w-lg">
            <p className="text-pink-500 text-lg font-semibold mb-3">
              Best Furniture For Your Castle...
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-4">
              New Furniture Collection   <br /> Trends in 2020
            </h1>
            <p className="text-gray-600 text-base md:text-lg mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing elit.
            </p>
            <button className="bg-pink-500 text-white text-lg font-semibold py-3 px-8 rounded-lg hover:bg-pink-600 transition">
              Shop Now
            </button>
          </div>
        </div>
  
        {/* Right Section */}
        <div className="relative">
          {/* Chair Image */}
          <Image
            src={'/homesofa.png'}
            alt="Chair"
            className="w-[450px] object-contain"
          />
         
        </div>
      </div>
    );
  }