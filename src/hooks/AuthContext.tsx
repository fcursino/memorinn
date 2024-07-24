import React, { createContext, useContext, ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { login, logout } from '../redux/auth/actions';
import { User } from '../redux/auth/state';

interface AuthContextProps {
  user: User;
  login: (user: User) => void;
  logout: (user: User) => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state);

  const loginAuth = (user: User) => dispatch(login(user));
  const logoutAuth = (user: User) => dispatch(logout(user));

  return (
    <AuthContext.Provider value={{ user, login: loginAuth, logout: logoutAuth }}>
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
