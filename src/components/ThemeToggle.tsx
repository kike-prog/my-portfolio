import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  darkMode: boolean;
  setDarkMode: (val: boolean | ((prev: boolean) => boolean)) => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ darkMode, setDarkMode }) => {
  return (
    <button
      onClick={() => setDarkMode(prev => !prev)}
      aria-label="Toggle theme mode"
      className="p-2.5 rounded-full glass-card hover:border-purple-500/50 transition-all duration-300 text-slate-300 hover:text-white flex items-center justify-center hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]"
    >
      {darkMode ? (
        <Sun className="w-5 h-5 text-amber-400 hover:rotate-90 transition-transform duration-300" />
      ) : (
        <Moon className="w-5 h-5 text-purple-600 hover:-rotate-12 transition-transform duration-300" />
      )}
    </button>
  );
};
