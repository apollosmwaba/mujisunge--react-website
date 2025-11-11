import { useState, useEffect } from 'react';
import { ArrowLeft, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import image1 from '../assets/images/fg2.JPG';
import image2 from '../assets/images/fg4.JPG';
import image3 from '../assets/images/P1.JPG';
import image4 from '../assets/images/4.jpg';
import image5 from '../assets/images/FG3.JPG';
import image6 from '../assets/images/h3.JPG';
import image7 from '../assets/images/5.JPG';
import image8 from '../assets/images/h2.JPG';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
}

const GalleryPage = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: image1,
      alt: "Mujisunge Farm Fields",
      title: "Sustainable Crop Fields",
      description: "Our lush green fields showcasing sustainable farming practices with diverse crop rotation."
    },
    {
      id: 2,
      src: image2,
      alt: "Young Plant Growth",
      title: "Seedling Development",
      description: "Young plants thriving in our nutrient-rich soil, representing new growth and hope."
    },
    {
      id: 3,
      src: image3,
      alt: "Farm Infrastructure",
      title: "Modern Farm Facilities",
      description: "State-of-the-art farming infrastructure supporting efficient agricultural operations."
    },
    {
      id: 4,
      src: image4,
      alt: "Harvest Season",
      title: "Abundant Harvest",
      description: "The fruits of our labor - a bountiful harvest showcasing the success of our methods."
    },
    {
      id: 5,
      src: image8,
      alt: "Organic Vegetables",
      title: "Fresh Organic Produce",
      description: "Freshly harvested organic vegetables grown with care and dedication."
    },
    {
      id: 6,
      src: image5,
      alt: "Farm Workers",
      title: "Dedicated Team",
      description: "Our skilled team of agricultural experts working together for sustainable farming."
    },
    {
      id: 7,
      src: image6,
      alt: "Irrigation Systems",
      title: "Smart Irrigation",
      description: "Advanced irrigation systems ensuring optimal water usage and crop health."
    },
    {
      id: 8,
      src: image7,
      alt: "Farm Equipment",
      title: "Modern Equipment",
      description: "State-of-the-art farming equipment for efficient and sustainable operations."
    }
  ];

  useEffect(() => {
    // Ensure page starts from top
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Simulate loading time for images
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : galleryImages.length - 1;
    } else {
      newIndex = currentIndex < galleryImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(galleryImages[newIndex].id);
  };

  const selectedImageData = selectedImage ? galleryImages.find(img => img.id === selectedImage) : null;

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      
      switch (e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowLeft':
          navigateImage('prev');
          break;
        case 'ArrowRight':
          navigateImage('next');
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-800 via-green-700 to-green-900 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 mb-8 text-white/80 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>
          
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Farm Gallery
            </h1>
            <p className="text-xl md:text-2xl text-green-100 leading-relaxed">
              Explore the beauty of Mujisunge Farm through our comprehensive photo gallery showcasing our sustainable practices, modern facilities, and natural beauty.
            </p>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-green-400/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-green-300/10 rounded-full animate-bounce"></div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Loading State */}
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {[...Array(8)].map((_, index) => (
                <div
                  key={index}
                  className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"
                ></div>
              ))}
            </div>
          ) : (
            /* Gallery Grid */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {galleryImages.map((image, index) => (
                <div
                  key={image.id}
                  className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 gallery-item-animate"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => openLightbox(image.id)}
                >
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-white p-4">
                        <ZoomIn className="w-8 h-8 mx-auto mb-2" />
                        <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                        <p className="text-sm text-gray-200 hidden sm:block">{image.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Call to Action */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Experience Mujisunge Farm
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Want to see more of our farm in person? Visit us or get in touch to schedule a personalized tour of our facilities and learn about our sustainable farming practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/#contact')}
                className="btn inline-block"
              >
                Schedule a Visit
              </button>
              <button 
                onClick={() => navigate('/#about')}
                className="btn-outline inline-block"
              >
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && selectedImageData && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full max-h-full lightbox-animate">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image */}
            <div className="relative">
              <img
                src={selectedImageData.src}
                alt={selectedImageData.alt}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              
              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <h3 className="text-white text-xl font-semibold mb-2">{selectedImageData.title}</h3>
                <p className="text-gray-200">{selectedImageData.description}</p>
              </div>
            </div>
          </div>

          {/* Click outside to close */}
          <div 
            className="absolute inset-0 -z-10" 
            onClick={closeLightbox}
          ></div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
