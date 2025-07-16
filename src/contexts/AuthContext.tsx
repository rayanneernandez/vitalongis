import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  type: 'caregiver' | 'family';
  avatar?: string;
  location?: string;
  specialties?: string[];
  verified?: boolean;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, type: 'caregiver' | 'family') => Promise<void>;
  logout: () => void;
  register: (userData: Omit<User, 'id'> & { password: string }) => Promise<void>;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string, type: 'caregiver' | 'family') => {
    setIsLoading(true);
    // Simulação de login
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const userData: User = {
      id: '1',
      name: type === 'caregiver' ? 'Maria Silva' : 'João Santos',
      email,
      type,
      avatar: `https://images.pexels.com/photos/${type === 'caregiver' ? '415829' : '1239291'}/pexels-photo-${type === 'caregiver' ? '415829' : '1239291'}.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1`,
      location: 'São Paulo, SP',
      specialties: type === 'caregiver' ? ['Cuidados Gerais', 'Alzheimer', 'Mobilidade'] : undefined,
      verified: true,
    };
    
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    setIsLoading(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const register = async (userData: Omit<User, 'id'> & { password: string }) => {
    setIsLoading(true);
    // Simulação de registro
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const newUser: User = {
      id: Date.now().toString(),
      name: userData.name,
      email: userData.email,
      type: userData.type,
      location: userData.location,
      specialties: userData.specialties,
      verified: false,
    };
    
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
    setIsLoading(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        register,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};