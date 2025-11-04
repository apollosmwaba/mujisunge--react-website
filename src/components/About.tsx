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
            Introduction  & Vision
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-sm sm:text-base">
              Mujisunge Farms is a leading agricultural enterprise dedicated to producing high-quality horticultural crops, cash crops, and livestock.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-sm sm:text-base">
               We are committed to sustainable farming practices that promote environmental stewardship and economic prosperity.      </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
              In addition to our agricultural production, we offer a range of agricultural services to support small-scale farmers and promote sustainable agriculture
       
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
