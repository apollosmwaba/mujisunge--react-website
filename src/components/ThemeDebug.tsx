// Temporary debug component to help fix theme issues
// Add this to App.tsx temporarily if theme is stuck

const ThemeDebug = () => {
  const resetTheme = () => {
    localStorage.removeItem('darkMode');
    document.documentElement.classList.remove('dark');
    window.location.reload();
  };

  const forceLight = () => {
    localStorage.setItem('darkMode', 'false');
    document.documentElement.classList.remove('dark');
    window.location.reload();
  };

  const forceDark = () => {
    localStorage.setItem('darkMode', 'true');
    document.documentElement.classList.add('dark');
    window.location.reload();
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg z-50 border">
      <h3 className="text-sm font-bold mb-2">Theme Debug</h3>
      <div className="flex gap-2">
        <button 
          onClick={resetTheme}
          className="px-2 py-1 bg-gray-500 text-white text-xs rounded"
        >
          Reset
        </button>
        <button 
          onClick={forceLight}
          className="px-2 py-1 bg-yellow-500 text-white text-xs rounded"
        >
          Light
        </button>
        <button 
          onClick={forceDark}
          className="px-2 py-1 bg-gray-900 text-white text-xs rounded"
        >
          Dark
        </button>
      </div>
      <div className="text-xs mt-2">
        <div>Storage: {localStorage.getItem('darkMode')}</div>
        <div>Has dark: {document.documentElement.classList.contains('dark') ? 'Yes' : 'No'}</div>
      </div>
    </div>
  );
};

export default ThemeDebug;
