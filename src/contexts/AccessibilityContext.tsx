import React, { createContext, useContext, useState, useEffect } from 'react';

interface AccessibilityContextType {
  fontSize: number;
  setFontSize: (size: number) => void;
  isDarkMode: boolean;
  setIsDarkMode: (isDark: boolean) => void;
  isHighContrast: boolean;
  setIsHighContrast: (isHigh: boolean) => void;
  isReducedMotion: boolean;
  setIsReducedMotion: (isReduced: boolean) => void;
  resetSettings: () => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export const AccessibilityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [fontSize, setFontSize] = useState(16);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('accessibility-settings');
    if (saved) {
      const settings = JSON.parse(saved);
      setFontSize(settings.fontSize || 16);
      setIsDarkMode(settings.isDarkMode || false);
      setIsHighContrast(settings.isHighContrast || false);
      setIsReducedMotion(settings.isReducedMotion || false);
    }
  }, []);

  useEffect(() => {
    const settings = {
      fontSize,
      isDarkMode,
      isHighContrast,
      isReducedMotion,
    };
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
    
    document.documentElement.style.fontSize = `${fontSize}px`;
    document.documentElement.classList.toggle('dark', isDarkMode);
    document.documentElement.classList.toggle('high-contrast', isHighContrast);
    document.documentElement.classList.toggle('reduced-motion', isReducedMotion);
  }, [fontSize, isDarkMode, isHighContrast, isReducedMotion]);

  const resetSettings = () => {
    setFontSize(16);
    setIsDarkMode(false);
    setIsHighContrast(false);
    setIsReducedMotion(false);
  };

  return (
    <AccessibilityContext.Provider
      value={{
        fontSize,
        setFontSize,
        isDarkMode,
        setIsDarkMode,
        isHighContrast,
        setIsHighContrast,
        isReducedMotion,
        setIsReducedMotion,
        resetSettings,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};