import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });

  // Sync state with DOM changes
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const currentlyDark = document.documentElement.classList.contains('dark');
      if (currentlyDark !== isDarkMode) {
        setIsDarkMode(currentlyDark);
      }
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, [isDarkMode]);

  const toggleTheme = () => {
    const htmlElement = document.documentElement;
    const newMode = !isDarkMode;
    
    // Update DOM
    if (newMode) {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
    
    // Update localStorage
    localStorage.setItem('darkMode', newMode ? 'true' : 'false');
    setIsDarkMode(newMode);
  };

  const setTheme = (darkMode: boolean) => {
    const htmlElement = document.documentElement;
    
    if (darkMode) {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
    
    localStorage.setItem('darkMode', darkMode ? 'true' : 'false');
    setIsDarkMode(darkMode);
  };

  return {
    isDarkMode,
    toggleTheme,
    setTheme
  };
};
