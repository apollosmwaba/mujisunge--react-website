import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Multiple approaches to ensure scrolling works
    // 1. Immediate scroll
    window.scrollTo(0, 0);
    
    // 2. Also try document scroll
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // 3. Backup with timeout in case of any delays
    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 0);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
