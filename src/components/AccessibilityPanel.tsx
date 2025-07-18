// AccessibilityPanel.tsx
import React from 'react';
import {
  Sun,
  Moon,
  Type,
  Contrast,
  Zap,
  RotateCcw,
  Minus,
  Plus,
  X,
} from 'lucide-react';
import { useAccessibility } from '../contexts/AccessibilityContext';

interface AccessibilityPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const AccessibilityPanel: React.FC<AccessibilityPanelProps> = ({ isOpen, onClose }) => {
  const {
    fontSize,
    setFontSize,
    isDarkMode,
    setIsDarkMode,
    isHighContrast,
    setIsHighContrast,
    isReducedMotion,
    setIsReducedMotion,
    resetSettings,
  } = useAccessibility();

  const increaseFontSize = () => setFontSize(Math.min(fontSize + 2, 24));
  const decreaseFontSize = () => setFontSize(Math.max(fontSize - 2, 12));

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-40 bg-black/50"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-label="Painel de acessibilidade"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          fixed top-0 right-0 h-full bg-white dark:bg-gray-800 shadow-xl transform
          transition-transform duration-300 ease-in-out p-6 overflow-y-auto
          w-80 max-w-full z-50
        "
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            Acessibilidade
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
            aria-label="Fechar painel"
            type="button"
          >
            <X size={20} />
          </button>
        </div>

        <div className="space-y-6">
          {/* Tamanho da Fonte */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Type size={20} className="text-blue-600" />
              <span className="font-medium text-gray-900 dark:text-white">
                Tamanho da Fonte
              </span>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={decreaseFontSize}
                className="p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full transition-colors"
                aria-label="Diminuir fonte"
                type="button"
              >
                <Minus size={16} />
              </button>
              <span className="min-w-[60px] text-center font-medium text-gray-900 dark:text-white">
                {fontSize}px
              </span>
              <button
                onClick={increaseFontSize}
                className="p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full transition-colors"
                aria-label="Aumentar fonte"
                type="button"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>

          {/* Modo Escuro */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              {isDarkMode ? (
                <Moon size={20} className="text-blue-600" />
              ) : (
                <Sun size={20} className="text-blue-600" />
              )}
              <span className="font-medium text-gray-900 dark:text-white">
                Modo Escuro
              </span>
            </div>
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={isDarkMode}
                onChange={(e) => setIsDarkMode(e.target.checked)}
                className="sr-only"
              />
              <div
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  isDarkMode ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                    isDarkMode ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </div>
              <span className="ml-3 text-gray-900 dark:text-white">
                {isDarkMode ? 'Ativado' : 'Desativado'}
              </span>
            </label>
          </div>

          {/* Alto Contraste */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Contrast size={20} className="text-blue-600" />
              <span className="font-medium text-gray-900 dark:text-white">
                Alto Contraste
              </span>
            </div>
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={isHighContrast}
                onChange={(e) => setIsHighContrast(e.target.checked)}
                className="sr-only"
              />
              <div
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  isHighContrast ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                    isHighContrast ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </div>
              <span className="ml-3 text-gray-900 dark:text-white">
                {isHighContrast ? 'Ativado' : 'Desativado'}
              </span>
            </label>
          </div>

          {/* Reduzir Movimento */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Zap size={20} className="text-blue-600" />
              <span className="font-medium text-gray-900 dark:text-white">
                Reduzir Movimento
              </span>
            </div>
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={isReducedMotion}
                onChange={(e) => setIsReducedMotion(e.target.checked)}
                className="sr-only"
              />
              <div
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  isReducedMotion ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                    isReducedMotion ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </div>
              <span className="ml-3 text-gray-900 dark:text-white">
                {isReducedMotion ? 'Ativado' : 'Desativado'}
              </span>
            </label>
          </div>

          {/* Resetar Configurações */}
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={resetSettings}
              className="w-full flex items-center justify-center gap-2 p-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors"
              type="button"
            >
              <RotateCcw size={20} />
              <span className="font-medium">Resetar Configurações</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityPanel;
