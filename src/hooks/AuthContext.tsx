import React, { createContext, useContext, ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { login, logout } from '../redux/auth/actions';
import { User, initialState } from '../redux/auth/state';
import memorinnAPI from '../services/memorinnAPI';

interface AuthContextProps {
  user: User;
  login: (user: Credentials) => Promise<boolean>;
  logout: () => void;
}

interface Credentials {
  email: string;
  password: string;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const dispatch = useDispatch<AppDispatch>();
  const auth = useSelector((state: RootState) => state.auth);

  const loginAuth = async (user: Credentials) => {
    const response = await memorinnAPI.post(`/users/login`, { ...user })
    if(response.data) {
      login(response.data)
      return true
    }
    return false
  }
  const logoutAuth = () => dispatch(logout(initialState));

  return (
    <AuthContext.Provider value={{ user: auth, login: loginAuth, logout: logoutAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
};
