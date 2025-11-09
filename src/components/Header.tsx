import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, Moon, Sun } from 'lucide-react';
import { useCart } from '../context/CartContext';
import logo from '../assets/images/LOGO.jpg';

interface HeaderProps {
  onCartClick: () => void;
}

const Header = ({ onCartClick }: HeaderProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Initialize dark mode state from current DOM state
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      // Check the actual DOM state as source of truth
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });
  const { cartCount } = useCart();

  useEffect(() => {
    // Apply theme changes to HTML element
    const htmlElement = document.documentElement;
    
    // Remove all theme classes first to ensure clean state
    htmlElement.classList.remove('dark');
    
    // Apply the appropriate theme
    if (isDarkMode) {
      htmlElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      localStorage.setItem('darkMode', 'false');
    }
    
    console.log('Theme applied:', isDarkMode ? 'Dark' : 'Light', 'Classes:', htmlElement.className);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    const htmlElement = document.documentElement;
    const currentlyDark = htmlElement.classList.contains('dark');
    const newMode = !currentlyDark;
    
    // Force immediate DOM update
    if (newMode) {
      htmlElement.classList.remove('dark');
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
    
    // Update state and localStorage
    setIsDarkMode(newMode);
    localStorage.setItem('darkMode', newMode ? 'true' : 'false');
    
    console.log('Theme toggled from', currentlyDark ? 'Dark' : 'Light', 'to', newMode ? 'Dark' : 'Light');
    console.log('Final classes:', htmlElement.className);
  };

  const navLinks = [
    { href: '/', label: 'Home', isRoute: true },
    { href: '/about', label: 'About', isRoute: true },
    { href: '/products', label: 'Products', isRoute: true },
    { href: '/gallery', label: 'Gallery', isRoute: true },
    { href: '/#services', label: 'Services', isRoute: false },
    { href: '/#contact', label: 'Contact', isRoute: false },
  ];

  const handleNavClick = (href: string, isRoute: boolean) => {
    setIsMenuOpen(false);
    if (isRoute) {
      navigate(href);
    } else {
      // For hash links, navigate to home first if not already there, then scroll
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(href.replace('/#', '#'));
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.querySelector(href.replace('/#', '#'));
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow-lg sticky top-0 z-[1000] transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6">
        <nav className="flex justify-between items-center py-4 md:py-5">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={() => navigate('/')}
              className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity animate-fade-in-up"
            >
              <img 
                src={logo} 
                alt="Mujisunge Farm Logo" 
                className="h-8 sm:h-10 md:h-12 w-auto object-contain animate-fade-in"
              />
              <span className="font-display text-lg sm:text-xl md:text-2xl font-extrabold text-[#2e8b57] hover:text-[#1e5d3b] transition-colors animate-fade-in animation-delay-200">
                Mujisunge Farms
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex space-x-6 xl:space-x-8">
            {navLinks.map((link, index) => (
              <li key={link.href} className={`animate-fade-in animation-delay-${300 + index * 100}`}>
                <button
                  onClick={() => handleNavClick(link.href, link.isRoute)}
                  className="text-gray-800 dark:text-gray-200 font-medium hover:text-[#2e8b57] transition-colors duration-200"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={toggleDarkMode}
              className={`p-2 transition-all duration-200 rounded-lg animate-fade-in animation-delay-900 ${
                isDarkMode 
                  ? 'text-yellow-400 hover:text-yellow-300 hover:bg-gray-700' 
                  : 'text-gray-600 hover:text-[#2e8b57] hover:bg-gray-100'
              }`}
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? (
                <Sun size={20} className="sm:w-6 sm:h-6" />
              ) : (
                <Moon size={20} className="sm:w-6 sm:h-6" />
              )}
            </button>

            <button
              onClick={onCartClick}
              className="relative p-2 text-gray-800 dark:text-gray-200 hover:text-[#2e8b57] dark:hover:text-[#2e8b57] transition-colors duration-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 animate-fade-in animation-delay-1000"
              aria-label="Shopping cart"
            >
              <ShoppingCart size={20} className="sm:w-6 sm:h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#ffcc00] text-[#1e5d3b] rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-[#2e8b57] hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors animate-fade-in animation-delay-1100"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="flex flex-col space-y-3 py-4 border-t border-gray-200 dark:border-gray-700">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href, link.isRoute)}
                  className="block py-2 px-4 text-gray-800 dark:text-gray-200 font-medium hover:text-[#2e8b57] hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-all duration-200 w-full text-left"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
