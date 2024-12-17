import Image from "next/image";
export default function Home() {
  const products = [
    { title: "Vel elit eiusmod", price: 60, discountPrice: 45, image: "/pr1.png" },
    { title: "Ultricies condimentum", price: 75, discountPrice: 50, image: "/pr2.png" },
    { title: "Vitae suspendisse", price: 80, discountPrice: 60, image: "/pr3.png" },
    { title: "Sed at fermentum", price: 90, discountPrice: 65, image: "/watch1.png" },
    { title: "Fusce pellentesque", price: 100, discountPrice: 80, image: "/watch2.png" },
    { title: "Vestibulum magna", price: 120, discountPrice: 90, image: "/sofaa1.png" },
    { title: "Pellentesque condimentum", price: 85, discountPrice: 70, image: "/sofaa2.png" },
    { title: "Cras scelerisque vel it", price: 95, discountPrice: 75, image: "/camera.png" },
    { title: "Lectus vulputate faucibus", price: 110, discountPrice: 85, image: "/homesofa.png" },
    { title: "Solicitudin amet arcu", price: 105, discountPrice: 90, image: "/pr4.png" },
    { title: "Ultrices mauris sit", price: 115, discountPrice: 95, image: "/image17.png" },
    { title: "Pariar risus ut", price: 125, discountPrice: 100, image: "/image15.png" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Ecommerce Accessories & Fashion Items</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index} className="bg-white border rounded-md shadow-md p-4">
              <Image
                src={product.image}
                alt={product.title}
                height={30}
                width={40}
                className="w-40 h-30 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <div className="flex items-center mt-2">
                <span className="text-red-500 font-bold mr-2">${product.discountPrice}</span>
                <span className="line-through text-gray-500">${product.price}</span>
              </div>
              <div className="mt-2">
                <span className="text-yellow-500">★★★★★</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}