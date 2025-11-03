import { useEffect } from 'react';
import Hero from './Hero';
import Products from './Products';
import About from './About';
import GalleryPreview from './GalleryPreview';
import Services from './Services';
import Contact from './Contact';
import Map from './Map';

const HomePage = () => {
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

  return (
    <main>
      <Hero />
      <div className="scroll-reveal">
        <Products />
      </div>
      <div className="scroll-reveal">
        <About />
      </div>
      <div className="scroll-reveal">
        <GalleryPreview />
      </div>
      <div className="scroll-reveal">
        <Services />
      </div>
      <div className="scroll-reveal">
        <Contact />
      </div>
      <div className="scroll-reveal">
        <Map />
      </div>
    </main>
  );
};

export default HomePage;
