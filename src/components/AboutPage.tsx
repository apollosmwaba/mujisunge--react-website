import { useState, useEffect } from 'react';
import { ArrowLeft, Users, Target, Lightbulb, Award, Leaf, TrendingUp, Heart, CheckCircle, FlaskConical, Wheat, Recycle, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import image2 from '../assets/images/4.jpg';

const AboutPage = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Ensure page starts from top
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    setIsVisible(true);
    
    // Scroll reveal animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: '500+', label: 'Farmers Supported', icon: Users },
    { number: '1000+', label: 'Hectares Cultivated', icon: Leaf },
    { number: '95%', label: 'Success Rate', icon: TrendingUp },
    { number: '10+', label: 'Years Experience', icon: Award }
  ];

  const values = [
    {
      icon: Target,
      title: 'Sustainability',
      description: 'We prioritize environmentally conscious farming practices that preserve our natural resources for future generations.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Combining traditional knowledge with cutting-edge technology to revolutionize agricultural practices.'
    },
    {
      icon: Heart,
      title: 'Community',
      description: 'Building strong relationships with local farmers and communities to create lasting positive impact.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering the highest quality products and services that exceed expectations.'
    }
  ];

  const achievements = [
    'Certified Organic Farming Practices',
    'Award-winning Sustainable Agriculture Program',
    'Partnership with 50+ Local Communities',
    'Zero-waste Production Initiative',
    'Climate-smart Agriculture Implementation',
    'Youth Farmer Training Programs'
  ];

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
          
          <div className={`max-w-4xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              About Mujisunge Farm
            </h1>
            <p className="text-xl md:text-2xl text-green-100 leading-relaxed">
              Pioneering sustainable agriculture in Zambia through innovation, community partnership, and environmental stewardship.
            </p>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-green-400/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-green-300/10 rounded-full animate-bounce"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center scroll-reveal opacity-0 transition-all duration-700 delay-${index * 100}`}
              >
                <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow group hover:-translate-y-2 duration-300">
                  <stat.icon className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.number}</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-reveal opacity-0">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
                Our Mission & Vision
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Founded with a passion for sustainable agriculture, Mujisunge Farm is committed to revolutionizing farming practices in Zambia through innovative, environmentally conscious methods.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  We believe in the power of agriculture to transform communities, create economic opportunities, and protect our natural resources for future generations.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Our team of agricultural experts combines traditional knowledge with modern techniques to deliver solutions that are both effective and sustainable.
                </p>
              </div>
            </div>
            
            <div className="scroll-reveal opacity-0">
              <div className="relative">
                <img
                  src={image2}
                  alt="Mujisunge Farm"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-reveal opacity-0">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              These principles guide everything we do and shape our commitment to sustainable agriculture.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`scroll-reveal opacity-0 transition-all duration-700 delay-${index * 150}`}
              >
                <div className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 h-full">
                  <div className="bg-green-100 dark:bg-green-900/30 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <value.icon className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 scroll-reveal opacity-0">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Our Achievements
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Milestones that reflect our commitment to excellence and sustainable agriculture.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={`scroll-reveal opacity-0 transition-all duration-700 delay-${index * 100}`}
                >
                  <div className="flex items-center gap-4 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow group">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-800 dark:text-gray-200 font-medium">{achievement}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Research and Development Section */}
      <section className="py-20 bg-[#2c3e50] dark:bg-[#1a252f]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 scroll-reveal opacity-0">
              <div className="flex items-center justify-center gap-3 mb-6">
                <FlaskConical className="w-12 h-12 text-[#2e8b57]" />
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Research and <span className="text-red-500">Development</span>
                </h2>
              </div>
            </div>
            
            <div className="bg-[#34495e] dark:bg-[#2c3e50] rounded-2xl p-8 md:p-12 shadow-xl scroll-reveal opacity-0 border border-gray-600/30">
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed text-justify">
                Mujisunge Farms is exploring various research and development opportunities to enhance its operations and stay competitive in the agricultural sector. These opportunities include adopting agricultural technologies like precision agriculture, automation, and data analytics, developing strategies to adapt to climate change, implementing sustainable farming practices, creating value-added products, and conducting market research. By investing in R&D, Mujisunge Farms seeks to stay at the forefront of agricultural innovation, improve its competitiveness, and contribute to sustainable and resilient agriculture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Plans and Goals Section */}
      <section className="py-20 bg-[#2c3e50] dark:bg-[#1a252f] relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-[#2e8b57]/10 rounded-full opacity-50"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-red-500/10 rounded-full opacity-50"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 scroll-reveal opacity-0">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Future Plans
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-red-500 mb-8">
                and Goals
              </h3>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-4xl mx-auto">
                Mujisunge farms hopes to engage in various activities in future like sustainable projects for rural communities in Chongwe, climate education for schools, local fruit plantation production and highly efficient organic production classes all by 2030.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {/* Organic Product Line */}
              <div className="scroll-reveal opacity-0 transition-all duration-700 delay-100">
                <div className="bg-[#2e8b57] hover:bg-[#228b22] rounded-3xl p-8 text-center text-white shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 group">
                  <div className="bg-red-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Wheat className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-4">Organic Product Line</h4>
                  <p className="text-green-100 leading-relaxed">
                    Developing a comprehensive range of certified organic products to meet growing market demand for sustainable agriculture.
                  </p>
                </div>
              </div>

              {/* Eco-Friendly Farming Solutions */}
              <div className="scroll-reveal opacity-0 transition-all duration-700 delay-200">
                <div className="bg-[#2e8b57] hover:bg-[#228b22] rounded-3xl p-8 text-center text-white shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 group">
                  <div className="bg-red-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Recycle className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-4">Eco-Friendly Farming Solutions</h4>
                  <p className="text-green-100 leading-relaxed">
                    Implementing innovative sustainable farming techniques that protect the environment while maximizing productivity.
                  </p>
                </div>
              </div>

              {/* Local Fruit Production Research */}
              <div className="scroll-reveal opacity-0 transition-all duration-700 delay-300">
                <div className="bg-[#2e8b57] hover:bg-[#228b22] rounded-3xl p-8 text-center text-white shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 group">
                  <div className="bg-red-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Search className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-4">Engage in Local Fruit Production Research</h4>
                  <p className="text-green-100 leading-relaxed">
                    Conducting research to optimize local fruit varieties and develop climate-resilient cultivation methods.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 dark:from-gray-700 dark:to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto scroll-reveal opacity-0">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join Our Mission
            </h2>
            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              Be part of the agricultural revolution. Together, we can create a sustainable future for farming in Zambia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/#contact')}
                className="bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105 duration-200"
              >
                Get In Touch
              </button>
              <button
                onClick={() => navigate('/products')}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-700 transition-colors transform hover:scale-105 duration-200"
              >
                View Our Products
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
