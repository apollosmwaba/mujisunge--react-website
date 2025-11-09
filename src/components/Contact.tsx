import { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-title">
          <h2 className="text-3xl sm:text-4xl">Contact Us</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-12">
          {/* Contact Info */}
          <div className="flex-1">
            <h3 className="text-xl sm:text-2xl font-bold text-[#1e5d3b] dark:text-[#2e8b57] mb-4 sm:mb-6">
              Get In Touch
            </h3>

            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-light dark:bg-gray-700 rounded-full flex items-center justify-center text-primary-green flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-base sm:text-lg mb-1">Email</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base break-all">mujisungefarms@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-light dark:bg-gray-700 rounded-full flex items-center justify-center text-primary-green flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Phone</h4>
                  <p className="text-gray-600 dark:text-gray-400">+260 777 592 631</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-light dark:bg-gray-700 rounded-full flex items-center justify-center text-primary-green flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Location</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    25a Munali Road, Kwamwena Valley<br />
                    Kapwayambale, Lusaka, Zambia
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#1e5d3b] dark:text-[#2e8b57] mb-4">
              Follow Us
            </h3>
            <div className="flex gap-4">
              {[
                { icon: <Facebook size={20} />, href: 'https://www.facebook.com/people/Mujisunge-Farms/100094436227528/' },
                { icon: <Instagram size={20} />, href: '#' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 sm:w-11 sm:h-11 bg-[#2e8b57] rounded-full flex items-center justify-center text-white hover:bg-[#1e5d3b] hover:-translate-y-1 transition-all duration-200"
                  aria-label="Social media link"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex-1">
            <form onSubmit={handleSubmit} className="bg-[#e8f5e9] dark:bg-gray-700 p-6 sm:p-8 rounded-lg">
              <div className="mb-5">
                <label htmlFor="name" className="block mb-2 font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-green"
                />
              </div>

              <div className="mb-5">
                <label htmlFor="email" className="block mb-2 font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-green"
                />
              </div>

              <div className="mb-5">
                <label htmlFor="phone" className="block mb-2 font-medium">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-green"
                />
              </div>

              <div className="mb-5">
                <label htmlFor="message" className="block mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-green resize-vertical"
                />
              </div>

              <button type="submit" className="btn w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
