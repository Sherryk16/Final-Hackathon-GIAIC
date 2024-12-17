import Image from "next/image";
export default function FurnitureBanner() {
    return (
      <div className="relative bg-white px-6 py-12 md:px-14 md:py-16 lg:py-20 lg:px-20">
  {/* Wrapper */}
  <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-10 lg:gap-16">
    {/* Left Section */}
    <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10">
      {/* Bulb Image */}
      <Image
        src={'/bulb.png'}
        width={387}
        height={387}
        alt="Bulb"
        className="w-[200px] md:w-[300px] lg:w-[387px] object-contain"
      />

      {/* Text Section */}
      <div className="max-w-lg text-center md:text-left">
        <p className="text-pink-500 text-sm md:text-lg font-semibold mb-2 md:mb-3">
          Best Furniture For Your Castle...
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-3 md:mb-4">
          New Furniture Collection <br /> Trends in 2020
        </h1>
        <p className="text-gray-600 text-sm md:text-base lg:text-lg mb-4 md:mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing elit.
        </p>
        <button className="bg-pink-500 text-white text-sm md:text-lg font-semibold py-2 md:py-3 px-6 md:px-8 rounded-lg hover:bg-pink-600 transition">
          Shop Now
        </button>
      </div>
    </div>

    {/* Right Section */}
    <div className="flex justify-center">
      {/* Chair Image */}
      <Image
        src={'/homesofa.png'}
        width={450}
        height={450}
        alt="Chair"
        className="w-[300px] md:w-[400px] lg:w-[450px] object-contain"
      />
    </div>
  </div>
</div>

    );
  }