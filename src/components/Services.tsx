import { Sprout, Tractor, Droplets, Leaf } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Sprout size={40} />,
      title: "Organic Farming",
      description: "Specializing in chemical-free cultivation methods that produce healthier crops while preserving soil fertility and biodiversity."
    },
    {
      icon: <Tractor size={40} />,
      title: "Modern Equipment",
      description: "Access to state-of-the-art farming machinery and technology for efficient land preparation, planting, and harvesting."
    },
    {
      icon: <Droplets size={40} />,
      title: "Irrigation Solutions",
      description: "Implementing water-efficient irrigation systems that maximize crop yield while conserving precious water resources."
    },
    {
      icon: <Leaf size={40} />,
      title: "Sustainable Practices",
      description: "Training and consulting on eco-friendly farming techniques that protect the environment and ensure long-term productivity."
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-[#e8f5e9] dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-title">
          <h2 className="text-3xl sm:text-4xl">Our Services</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 sm:p-8 text-center shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#e8f5e9] dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5 text-[#2e8b57]">
                {service.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#1e5d3b] dark:text-[#2e8b57] mb-3 sm:mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
