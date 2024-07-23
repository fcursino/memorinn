// import React, { createContext, useState, useContext, ReactNode } from 'react';
// import memorinnAPI from '../services/memorinnAPI';
// import Cookies from 'js-cookie';
// interface User {
//   name: string;
//   email: string;
//   userName: string;
//   token: string;
//   id: string;
// }

// interface Credentials {
//   email: string;
//   password: string;
// }

// interface AuthContextType {
//   user: User | null;
//   login: (credentials: Credentials) => Promise<boolean>;
//   logout: () => void;
//   getFromStorage: () => User | null;
//   setToStorage: (user: User) => void;
// }

// interface AuthProviderProps {
//   children: ReactNode;
// }

// const AuthContext = createContext<AuthContextType | null>(null);

// export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
//   const [user, setUser] = useState<User | null>(null);
//   const [token, setToken] = useState<string | null>(null)

//   const login = async (credentials: Credentials) => {

//     try {
//       const response = await memorinnAPI.post('/users/login', {
//         email: credentials.email,
//         password: credentials.password
//       })
//       if(response.data) {
//         setUser({
//           id: response.data.user.id,
//           name: response.data.user.name,
//           email: response.data.user.email,
//           userName: response.data.user.userName,
//           token: response.data.token
//         })
//         setToken(response.data.token)
//         setToStorage(response.data)
//         return true
//       } else {
//         return false
//       }
//     } catch (error: any) {
//       return false
//     }
//   };

//   const logout = () => {
//     setUser(null);
//     Cookies.remove('user')
//   };

//   const getFromStorage = () => {
//     const currentUser = Cookies.get('user')
//     if(currentUser) {
//       setUser(JSON.parse(currentUser))
//       return JSON.parse(currentUser)
//     }
//     return null
//   }

//   const setToStorage = (data: any) => {
//     Cookies.set('user', JSON.stringify({
//       id: data.user.id,
//       name: data.user.name,
//       email: data.user.email,
//       userName: data.user.userName,
//       token: data.token
//     }))
//   }

//   return (
//     <AuthContext.Provider  value={{ user, login, logout, getFromStorage, setToStorage }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = (): AuthContextType => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuth deve ser usado dentro de um AuthProvider');
//   }
//   return context;
// };
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
