import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PI2 from '../assets/images/P1.JPG';

const Products = () => {
  const navigate = useNavigate();

  return (
    <section id="products" className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-title">
          <h2 className="text-3xl sm:text-4xl">Our Products</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                At Mujisunge Farms, we offer a range of agricultural services to support small-scale farmers and promote sustainable agriculture
       . 
                We are dedicated to working to create a more sustainable and resilient agricultural sector.
              </p>
              
              {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                  <div className="p-2 bg-green-100 dark:bg-green-900 rounded-full">
                    <Sprout className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-gray-800 dark:text-gray-200">Seeds & Plants</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Premium varieties</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-full">
                    <Leaf className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-gray-800 dark:text-gray-200">Fertilizers</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Organic solutions</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                  <div className="p-2 bg-orange-100 dark:bg-orange-900 rounded-full">
                    <Tractor className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-gray-800 dark:text-gray-200">Equipment</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Modern tools</p>
                  </div>
                </div>
              </div> */}
            </div>

            <button
              onClick={() => navigate('/products')}
              className="inline-flex items-center gap-3 bg-[#2e8b57] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1e5d3b] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span>Explore All Products</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Right Column - Creative Image Layout */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                src={PI2}
                alt="Agricultural Products"
                className="w-full h-80 lg:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white text-xl font-bold mb-2">Quality Products for Modern Farming</h3>
                <p className="text-white/90 text-sm">Sustainable solutions for every agricultural need</p>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#2e8b57] rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-[#1e5d3b] rounded-full opacity-30 animate-pulse animation-delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
