import { useEffect, useState } from 'react';
import { Sprout } from 'lucide-react';

const Loader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setIsVisible(false), 500);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 bg-gradient-to-br from-[#2e8b57] to-[#1e5d3b] flex items-center justify-center z-[9999] transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="text-center">
        {/* Animated Logo */}
        <div className="relative mb-8">
          {/* Outer rotating circle */}
          <div className="w-24 h-24 border-4 border-white/30 border-t-white rounded-full animate-spin mx-auto"></div>
          
          {/* Inner icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white rounded-full p-4 shadow-2xl animate-pulse">
              <Sprout size={32} className="text-[#2e8b57]" />
            </div>
          </div>
        </div>

        {/* Brand Name */}
        <div className="space-y-2">
          <h1 className="font-display text-4xl font-bold text-white tracking-wide animate-pulse">
            Mujisunge Farm
          </h1>
          <p className="text-white/80 text-sm font-medium tracking-widest">
            SUSTAINABLE AGRICULTURE
          </p>
        </div>

        {/* Loading dots */}
        <div className="flex justify-center gap-2 mt-6">
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
