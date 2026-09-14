import React from 'react';
import { BsSunFill, BsMoonStarsFill } from 'react-icons/bs';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = ({ className = "" }) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark and light theme"
      className={`p-2.5 rounded-full transition-all duration-300 transform hover:scale-110 focus:outline-none 
      ${isDark 
        ? 'bg-slate-800/80 text-yellow-400 border border-slate-700 hover:bg-slate-700 hover:shadow-lg hover:shadow-yellow-500/20' 
        : 'bg-slate-100 text-slate-800 border border-slate-300 hover:bg-slate-200 hover:shadow-lg hover:shadow-slate-400/20'
      } ${className}`}
    >
      {isDark ? (
        <BsSunFill size={20} className="transition-transform duration-500 rotate-0 hover:rotate-90" />
      ) : (
        <BsMoonStarsFill size={18} className="transition-transform duration-500 hover:-rotate-12" />
      )}
    </button>
  );
};

export default ThemeToggle;
