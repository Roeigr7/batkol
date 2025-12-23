"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Theme = 'regular' | 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('regular');
  const [mounted, setMounted] = useState(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme && ['regular', 'dark', 'light'].includes(savedTheme)) {
      setTheme(savedTheme);
    }
  }, []);

  // Apply theme to document
  useEffect(() => {
    if (!mounted) return;
    
    const html = document.documentElement;
    
    // Remove all theme classes
    html.classList.remove('theme-regular', 'theme-dark', 'theme-light');
    
    // Add current theme class
    html.classList.add(`theme-${theme}`);
    
    // Save to localStorage
    localStorage.setItem('theme', theme);
  }, [theme, mounted]);

  // Prevent flash of wrong theme
  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

