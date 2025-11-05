import { useState, useEffect } from 'react';
import image1 from '../assets/images/1.jpg';
import image2 from '../assets/images/2.jpg';
import image3 from '../assets/images/3.jpg';
import heroImage from '../assets/images/0.png';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    image1,
    image2,
    image3,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section id="home" className="relative min-h-screen h-screen flex items-center text-white overflow-hidden">
      {/* Slideshow */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${slide})` }}
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1e5d3b]/85 to-[#1e5d3b]/90" />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
          {/* Left Column - Text Content */}
          <div className="animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 sm:mb-6 leading-tight">
              Welcome To Mujisunge Farms 
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90 leading-relaxed">
              Mujisunge Farms is a leading agricultural enterprise dedicated to producing high-quality horticultural crops, cash crops, and livestock. We are committed to sustainable farming practices that promote environmental stewardship and economic prosperity.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href="#contact" className="btn text-center">
                Contact Us
              </a>
              <a href="#products" className="btn btn-outline text-center">
                Our Products
              </a>
            </div>
          </div>
          
          {/* Right Column - Hero Image */}
          <div className="relative animate-fade-in-up animation-delay-300">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={heroImage} 
                alt="Mujisunge Farms - Sustainable Agriculture" 
                className="w-full h-[400px] lg:h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 sm:gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-[#ffcc00] scale-125' : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
