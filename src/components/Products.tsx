import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import type { Product } from '../types';
import image1 from '../assets/images/1.jpg';
import image2 from '../assets/images/2.jpg';
import image3 from '../assets/images/3.jpg';

const products: Product[] = [
  {
    id: 1,
    name: "Organic Maize Seeds",
    price: 25.99,
    description: "High-yield, non-GMO maize seeds suitable for Zambian climate",
    image: image1
  },
  {
    id: 2,
    name: "Premium Fertilizer",
    price: 45.50,
    description: "Balanced NPK fertilizer for all crop types",
    image: image2
  },
  {
    id: 3,
    name: "Irrigation Drip Kit",
    price: 120.00,
    description: "Complete drip irrigation system for 0.5 acre farm",
    image: image3
  },
  {
    id: 4,
    name: "Organic Pesticides",
    price: 35.75,
    description: "Eco-friendly pest control solution for vegetables",
    image: image1
  },
  {
    id: 5,
    name: "Farm Tools Set",
    price: 85.00,
    description: "Complete set of essential farming tools",
    image: image2
  },
  {
    id: 6,
    name: "Greenhouse Kit",
    price: 350.00,
    description: "DIY greenhouse kit for small-scale farming",
    image: image3
  }
];

const Products = () => {
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
    <section id="products" className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-title">
          <h2 className="text-3xl sm:text-4xl">Our Products</h2>
        </div>

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
                <div className="text-xl sm:text-2xl font-bold text-[#2e8b57] mb-4">
                  K{product.price.toFixed(2)}
                </div>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="w-full flex items-center justify-center gap-2 bg-[#2e8b57] text-white py-2 px-4 rounded font-semibold hover:bg-[#1e5d3b] transition-colors duration-200"
                >
                  <ShoppingCart size={18} />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
