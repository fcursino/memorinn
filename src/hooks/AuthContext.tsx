import React, { createContext, useState, useContext, ReactNode } from 'react';
import memorinnAPI from '../services/memorinnAPI';

interface User {
  name: string;
  email: string;
  userName: string;
  token: string;
}

interface Credentials {
  email: string;
  password: string;
}

interface AuthContextType {
  user: User | null;
  login: (credentials: Credentials) => Promise<boolean>;
  logout: () => void;
  getFromStorage: () => User | null;
  setToStorage: (user: User) => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null)

  const login = async (credentials: Credentials) => {

    try {
      const response = await memorinnAPI.post('/users/login', {
        email: credentials.email,
        password: credentials.password
      })
      if(response.data) {
        setUser({
          name: response.data.user.name,
          email: response.data.user.email,
          userName: response.data.user.userName,
          token: response.data.token
        })
        setToken(response.data.token)
        setToStorage(response.data)
        return true
      } else {
        return false
      }
    } catch (error: any) {
      return false
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user')
  };

  const getFromStorage = () => {
    const currentUser = localStorage.getItem('user')
    if(currentUser) {
      setUser(JSON.parse(currentUser))
      return JSON.parse(currentUser)
    }
    return null
  }

  const setToStorage = (user: User) => {
    localStorage.setItem('user', JSON.stringify(user))
  }

  return (
    <AuthContext.Provider  value={{ user, login, logout, getFromStorage, setToStorage }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};
