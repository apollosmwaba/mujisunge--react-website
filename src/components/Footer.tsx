import { useState } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      alert(`Thank you for subscribing with ${email}! You'll receive our updates soon.`);
      setEmail('');
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Mujisunge Farm Column */}
          <div>
            <h3 className="text-green-700 text-xl font-bold mb-4 underline decoration-2 underline-offset-4">
              Mujisunge Farm
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              Sustainable agriculture solutions for a better tomorrow. Growing healthy crops with innovative farming practices.
            </p>
            <div className="flex space-x-3 mt-4">
              <a href="https://www.facebook.com/share/16hynyNBHG/?mibextid=wwXIfr" className="text-gray-400 hover:text-green-400 transition-colors" title="Facebook" target="_blank" rel="noopener noreferrer">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/mujisunge_farms?igsh=MTVjNXR3bDJjNWFqbw==" className="text-gray-400 hover:text-green-400 transition-colors" title="Instagram" target="_blank" rel="noopener noreferrer">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/mujisunge-farms/" className="text-gray-400 hover:text-green-400 transition-colors" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://www.tiktok.com/@mujisungefarms?_r=1&_t=ZM-91HHDPIjDUx" className="text-gray-400 hover:text-green-400 transition-colors" title="TikTok" target="_blank" rel="noopener noreferrer">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-4.59v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 1.9 14.4a6.34 6.34 0 0 0 10.86 4.43v-.05a6.29 6.29 0 0 0 1.88-4.44V8.84a8.16 8.16 0 0 0 4.77 1.52v-3.24a4.85 4.85 0 0 1-.82-.43z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-green-700  text-xl font-bold mb-4 underline decoration-2 underline-offset-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', href: '/' },
                { name: 'About', href: '/about' },
                // { name: 'Products', href: '/#products' },
                { name: 'Gallery', href: '/gallery' },
                // { name: 'Services', href: '/#services' },
                // { name: 'Contact', href: '/#contact' }
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Farm Info Column */}
          <div>
            <h3 className="text-green-700 text-xl font-bold mb-4 underline decoration-2 underline-offset-4">
              Farm Info
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/#about"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Our Story
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {/* Farming Methods
                </a>
              </li>
              <li>
                <a
                  href="/gallery"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Farm Tours
                </a>
              </li>
              <li>
                <a
                  href="/#contact"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                > */}
                  Visit Us
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="text-green-700 text-xl font-bold mb-4 underline decoration-2 underline-offset-4">
              Newsletter
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe for farm updates, harvest news, and seasonal offers
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
                className="flex-1 px-3 py-2 text-sm bg-gray-800 dark:bg-gray-700 text-white border border-gray-600 rounded-l focus:outline-none focus:border-orange-500"
              />
              <button 
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-r transition-colors"
              >
                →
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Mujisunge Farms. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
