import { useState, useEffect, useCallback } from 'react';
import type { Theme } from '@/types';

const STORAGE_KEY = 'portfolio-theme';

function getInitialTheme(): Theme {
  // Check localStorage first
  const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
  if (stored === 'dark' || stored === 'light') return stored;

  // Fall back to system preference
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
  return 'dark'; // default to dark for portfolio
}

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(() => {
    // SSR-safe: check if window exists
    if (typeof window === 'undefined') return 'dark';
    return getInitialTheme();
  });

  // Apply theme class to document root
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  // Listen for system preference changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      // Only follow system if user hasn't set a preference
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        setThemeState(e.matches ? 'dark' : 'light');
      }
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
  }, []);

  return { theme, toggleTheme, setTheme, isDark: theme === 'dark' };
}
