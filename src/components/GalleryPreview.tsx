import { useNavigate } from 'react-router-dom';
import { ArrowRight, Camera } from 'lucide-react';
import image1 from '../assets/images/1.jpg';
import image2 from '../assets/images/2.jpg';
import image3 from '../assets/images/3.jpg';

const GalleryPreview = () => {
  const navigate = useNavigate();

  const previewImages = [
    {
      id: 1,
      src: image1,
      alt: "Sustainable Crop Fields",
      title: "Sustainable Farming"
    },
    {
      id: 2,
      src: image2,
      alt: "Young Plant Growth",
      title: "Fresh Growth"
    },
    {
      id: 3,
      src: image3,
      alt: "Farm Infrastructure",
      title: "Modern Facilities"
    }
  ];

  return (
    <section id="gallery" className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="section-title">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Farm Gallery
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get a glimpse of our beautiful farm through these selected images showcasing our sustainable practices and natural beauty.
          </p>
        </div>

        {/* Preview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {previewImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 gallery-item-animate"
              style={{ animationDelay: `${index * 200}ms` }}
              onClick={() => navigate('/gallery')}
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
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-white">
                    <Camera className="w-8 h-8 mx-auto mb-2" />
                    <h3 className="font-semibold text-lg">{image.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full">
                <Camera className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Explore Our Complete Gallery
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Discover more stunning images of our farm, facilities, crops, and sustainable farming practices in our complete photo gallery.
            </p>
            <button
              onClick={() => navigate('/gallery')}
              className="btn inline-flex items-center gap-2 group"
            >
              View Farm Gallery
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
