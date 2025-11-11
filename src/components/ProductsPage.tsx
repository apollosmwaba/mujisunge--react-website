import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import type { Product } from '../types';
import pp1 from '../assets/images/h2.JPG';
import pp2 from '../assets/images/pp2.JPG';
import pp3 from '../assets/images/pp3.JPG';

const products: Product[] = [
  {
    id: 1,
    name: "Agricultural Production",
    description: "We specialize in producing high-quality horticultural crops, cash crops, and livestock. Our commitment to sustainable farming practices promotes environmental stewardship while ensuring economic prosperity for our community.",
    image: pp1
   
  },
  {
    id: 2,
    name: "Agricultural Consulting Services",
    description: "Mujisunge Farms offers comprehensive agricultural support, including expert consultation on crop selection, soil management, pest and disease control, and other essential practices. We provide valuable information on agricultural trends, market opportunities..",
    image: pp3
  },
  {
    id: 3,
    name: "Climate Change Education",
    description: "We raise awareness about the impacts of climate change on agriculture and offer practical solutions to mitigate its challenges. Our educational programs empower farmers with knowledge and tools for climate-resilient farming.",
    image: pp2
  },
  // {
  //   id: 4,
  //   name: "Organic Pesticides",
  //   price: 35.75,
  //   description: "Eco-friendly pest control solution for vegetables",
  //   image: pp1
  // },
  // {
  //   id: 5,
  //   name: "Farm Tools Set",
  //   price: 85.00,
  //   description: "Complete set of essential farming tools",
  //   image: image2
  // },
  // {
  //   id: 6,
  //   name: "Greenhouse Kit",
  //   price: 350.00,
  //   description: "DIY greenhouse kit for small-scale farming",
  //   image: image3
  // }
];

const ProductsPage = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    
    // Dispatch custom event for toast notification
    const event = new CustomEvent('cart-add', {
      detail: { message: `${product.name} added to cart!` }
    });
    window.dispatchEvent(event);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1e5d3b] dark:text-[#2e8b57] mb-4">
            Our Products
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover our comprehensive range of high-quality farming products designed to help you achieve sustainable and profitable agriculture.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <div className="h-48 sm:h-52 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="text-lg sm:text-xl font-bold text-[#1e5d3b] dark:text-[#2e8b57] mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                  {product.description}
                </p>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="w-full flex items-center justify-center gap-2 bg-[#2e8b57] text-white py-2 px-4 rounded font-semibold hover:bg-[#1e5d3b] transition-colors duration-200"
                >
                  <ShoppingCart size={18} />
                  Add to Inquiry
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-[#1e5d3b] dark:text-[#2e8b57] mb-4">
            Why Choose Our Products?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Quality Guaranteed
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                All our products are carefully selected and tested to ensure they meet the highest standards for Zambian farming conditions.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Expert Support
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our team of agricultural experts is always ready to provide guidance and support for your farming needs.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Sustainable Solutions
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We prioritize eco-friendly and sustainable farming practices that benefit both farmers and the environment.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Competitive Pricing
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Get the best value for your investment with our competitively priced, high-quality agricultural products.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
