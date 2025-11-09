import { Sprout, Users, GraduationCap } from 'lucide-react';
const Services = () => {
  const services = [
    {
      icon: <Sprout size={40} />,
      title: "Agricultural Production",
      description: "We specialize in producing high-quality horticultural crops, cash crops, and livestock. Our commitment to sustainable farming practices promotes environmental stewardship while ensuring economic prosperity for our community."
    },
    {
      icon: <Users size={40} />,
      title: "Agricultural Consulting Services",
      description: "Mujisunge Farms offers comprehensive agricultural support, including expert consultation on crop selection, soil management, pest and disease control, and other essential practices. We provide valuable information on agricultural trends, market opportunities, and best practices to help farmers optimize their operations and stay ahead of the curve."
    },
    {
      icon: <GraduationCap size={40} />,
      title: "Climate Change Education",
      description: "We raise awareness about the impacts of climate change on agriculture and offer practical solutions to mitigate its challenges. Our educational programs empower farmers with knowledge and tools for climate-resilient farming."
    },
   
  ];

  return (
    <section id="services" className="pt-20 pb-12 sm:pt-24 sm:pb-16 md:pt-28 md:pb-20 bg-[#e8f5e9] dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-title">
          <h2 className="text-2xl sm:text-3xl md:text-4xl">Our Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 lg:p-8 text-center shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 w-full max-w-sm"
            >
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-[#e8f5e9] dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-5 lg:mb-6 text-[#2e8b57]">
                {service.icon}
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-[#1e5d3b] dark:text-[#2e8b57] mb-4 lg:mb-5">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm lg:text-base">
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
