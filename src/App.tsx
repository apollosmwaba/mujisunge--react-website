import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Loader from './components/Loader';
import Header from './components/Header';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import GalleryPage from './components/GalleryPage';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Toast from './components/Toast';


function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Scroll reveal effect
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('.scroll-reveal');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Listen for cart additions
  useEffect(() => {
    const handleCartAdd = (event: CustomEvent) => {
      setToastMessage(event.detail.message);
    };

    window.addEventListener('cart-add' as any, handleCartAdd);
    return () => window.removeEventListener('cart-add' as any, handleCartAdd);
  }, []);

  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <Loader />
          <Header onCartClick={() => setIsCartOpen(true)} />
          <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
          
          {toastMessage && (
            <Toast
              message={toastMessage}
              onClose={() => setToastMessage(null)}
            />
          )}
          
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
          </Routes>
          
          <Footer />
          
         
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
