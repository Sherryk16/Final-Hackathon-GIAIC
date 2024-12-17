import Image from "next/image";
export default function Blog() {
    return (
      <div className="bg-gray-50 min-h-screen p-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800">Our Blog</h1>
          <p className="text-sm text-gray-500">Home &gt; Blog</p>
        </div>
  
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Blog Posts */}
          <div className="col-span-3 space-y-8">
            {/* Post 1 */}
            <div className="bg-white shadow rounded-lg p-4">
              <Image
                src={'/blogs.jpeg'} // Replace with your image
                width={64}
                height={64}
                alt="Blog 1"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h2 className="text-lg font-semibold text-gray-700 mb-2">
                Mauris at arcu non vulputate diam tincidunt nec.
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula justo neque,
                et fermentum erat maximus non...
              </p>
              <a href="#" className="text-pink-500 text-sm font-medium">
                Read More
              </a>
            </div>
  
            {/* Post 2 */}
            <div className="bg-white shadow rounded-lg p-4">
              <Image
                src={'/blogs.jpeg'} // Replace with your image
                height={64}
                width={64}
                alt="Blog 2"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h2 className="text-lg font-semibold text-gray-700 mb-2">
                Aenean vitae in aliquam ultrices lectus. Etiam.
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum nunc in 
                ligula gravida efficitur...
              </p>
              <a href="#" className="text-pink-500 text-sm font-medium">
                Read More
              </a>
            </div>
  
            {/* Post 3 */}
            <div className="bg-white shadow rounded-lg p-4">
              <Image
                src={'/blogs.jpeg'} // Replace with your image
                height={64}
                width={64}
                alt="Blog 3"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h2 className="text-lg font-semibold text-gray-700 mb-2">
                Sit nam congue feugiat nisi, mauris amet nisi.
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed est eu risus 
                tincidunt facilisis...
              </p>
              <a href="#" className="text-pink-500 text-sm font-medium">
                Read More
              </a>
            </div>
          </div>
  
          {/* Sidebar */}
          <div className="col-span-1">
            {/* Search */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Search</h3>
              <input
                type="text"
                placeholder="Search here..."
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
  
            {/* Categories */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Categories</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>Fashion (10)</li>
                <li>Technology (8)</li>
                <li>Travel (6)</li>
                <li>Music (4)</li>
              </ul>
            </div>
  
            {/* Recent Posts */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Recent Posts</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>
                  <a href="#" className="hover:text-pink-500">
                    How to design with Tailwind CSS
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-500">
                    Top 10 travel destinations for 2024
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-500">
                    Understanding React hooks
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Sale Product */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Sale Product</h3>
              <div className="flex items-center gap-4">
                <Image
                  src={'/sofaa1.png'} // Replace with your image
                  width={16}
                  height={16}
                  alt="Sale Product"
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div>
                  <h4 className="text-sm font-medium text-gray-700">Product Name</h4>
                  <p className="text-sm text-gray-500">$20.00</p>
                </div>
              </div>
            </div>
  
            {/* Follow Us */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="text-pink-500">
                  Facebook
                </a>
                <a href="#" className="text-pink-500">
                  Twitter
                </a>
                <a href="#" className="text-pink-500">
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }