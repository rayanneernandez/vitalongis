import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import {
  Heart,
  User,
  LogOut,
  Menu,
  X,
  Bell,
  MessageCircle,
  Settings,
} from 'lucide-react';
import AccessibilityPanel from './AccessibilityPanel';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isAccessibilityOpen, setIsAccessibilityOpen] = useState(false);
  const { user, logout } = useAuth();

  const navItems = [
    { id: 'home', label: 'Início', requiresAuth: false },
    { id: 'search', label: 'Buscar Cuidadores', requiresAuth: false },
    { id: 'contact', label: 'Contato', requiresAuth: false },
  ];

  const handleLogout = () => {
    logout();
    setCurrentPage('home');
    setIsProfileOpen(false);
  };

  return (
    <>
      <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <button
                onClick={() => setCurrentPage('home')}
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg px-2 py-1"
              >
                <Heart size={32} className="text-blue-600" />
                <span className="text-xl font-bold">Vitalongis</span>
              </button>
            </div>

            {/* Navegação Desktop */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                    currentPage === item.id
                      ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/20'
                      : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Área Direita (Desktop) */}
            <div className="flex items-center space-x-4">
              {/* Grupo menu/profile */}
              <div className="flex items-center space-x-4">
                {user && (
                  <>
                    <button
                      className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      aria-label="Notificações"
                    >
                      <Bell size={20} />
                    </button>
                    <button
                      className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      aria-label="Mensagens"
                    >
                      <MessageCircle size={20} />
                    </button>

                    <div className="relative">
                      <button
                        onClick={() => setIsProfileOpen(!isProfileOpen)}
                        className="flex items-center gap-2 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      >
                        {user.avatar ? (
                          <img
                            src={user.avatar}
                            alt={user.name}
                            className="w-8 h-8 rounded-full object-cover"
                          />
                        ) : (
                          <User size={20} className="text-gray-600 dark:text-gray-400" />
                        )}
                        <span className="hidden sm:block text-sm font-medium text-gray-700 dark:text-gray-300">
                          {user.name}
                        </span>
                      </button>

                      {isProfileOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50 border border-gray-200 dark:border-gray-700">
                          <button
                            onClick={() => {
                              setCurrentPage('profile');
                              setIsProfileOpen(false);
                            }}
                            className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                          >
                            <User size={16} />
                            Meu Perfil
                          </button>
                          <button
                            onClick={handleLogout}
                            className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                          >
                            <LogOut size={16} />
                            Sair
                          </button>
                        </div>
                      )}
                    </div>
                  </>
                )}

                {!user && (
                  <div className="hidden md:flex items-center space-x-2">
                    <button
                      onClick={() => setCurrentPage('login')}
                      className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg"
                    >
                      Entrar
                    </button>
                    <button
                      onClick={() => setCurrentPage('register')}
                      className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      Cadastrar
                    </button>
                  </div>
                )}
              </div>

              {/* Botão acessibilidade (desktop, depois do grupo) */}
              <button
                onClick={() => setIsAccessibilityOpen((v) => !v)}
                aria-label="Abrir painel de acessibilidade"
                className="hidden md:flex p-2 text-blue-600 hover:text-blue-800 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="button"
              >
                <Settings size={24} />
              </button>

              {/* Botões mobile invertidos: acessibilidade à esquerda, menu à direita */}
              <button
                onClick={() => setIsAccessibilityOpen((v) => !v)}
                aria-label="Abrir painel de acessibilidade"
                className="md:hidden p-2 text-blue-600 hover:text-blue-800 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 mr-2"
                type="button"
              >
                <Settings size={24} />
              </button>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-md text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Navegação Mobile */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200 dark:border-gray-700 py-4 space-y-4">
              <nav className="space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCurrentPage(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      currentPage === item.id
                        ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/20'
                        : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>

              {user && (
                <div className="flex items-center gap-4 px-3">
                  <button
                    className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    aria-label="Notificações"
                  >
                    <Bell size={20} />
                  </button>
                  <button
                    className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    aria-label="Mensagens"
                  >
                    <MessageCircle size={20} />
                  </button>
                </div>
              )}

              {/* Ações do Usuário no Mobile */}
              {user ? (
                <div className="px-3 space-y-2">
                  <button
                    onClick={() => {
                      setCurrentPage('profile');
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center gap-2 w-full text-left text-gray-700 dark:text-gray-300 hover:text-blue-600"
                  >
                    <User size={18} />
                    Meu Perfil
                  </button>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 w-full text-left text-gray-700 dark:text-gray-300 hover:text-red-500"
                  >
                    <LogOut size={18} />
                    Sair
                  </button>
                </div>
              ) : (
                <div className="px-3 space-y-2">
                  <button
                    onClick={() => {
                      setCurrentPage('login');
                      setIsMenuOpen(false);
                    }}
                    className="w-full px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700"
                  >
                    Entrar
                  </button>
                  <button
                    onClick={() => {
                      setCurrentPage('register');
                      setIsMenuOpen(false);
                    }}
                    className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg"
                  >
                    Cadastrar
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </header>

      {/* Painel de Acessibilidade */}
      <AccessibilityPanel
        isOpen={isAccessibilityOpen}
        onClose={() => setIsAccessibilityOpen(false)}
      />
    </>
  );
};

export default Header;
