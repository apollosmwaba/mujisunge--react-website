import { useNavigate } from 'react-router-dom';
import image2 from '../assets/images/2.jpg';

const About = () => {
  const navigate = useNavigate();
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-title">
          <h2 className="text-3xl sm:text-4xl">About Mujisunge Farm</h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-12">
          <div className="flex-1 w-full">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1e5d3b] dark:text-[#2e8b57] mb-4 sm:mb-5">
              Our Mission & Vision
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-sm sm:text-base">
              Founded with a passion for sustainable agriculture, Mujisunge Farm is committed to revolutionizing farming practices in Zambia through innovative, environmentally conscious methods.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-sm sm:text-base">
              We believe in the power of agriculture to transform communities, create economic opportunities, and protect our natural resources for future generations.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
              Our team of agricultural experts combines traditional knowledge with modern techniques to deliver solutions that are both effective and sustainable.
            </p>
            <button 
              onClick={() => navigate('/about')}
              className="btn inline-block"
            >
              Learn More
            </button>
          </div>

          <div className="flex-1 w-full">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src={image2}
                alt="Mujisunge Farm"
                className="w-full h-auto hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
