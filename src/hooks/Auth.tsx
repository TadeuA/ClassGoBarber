import React, { createContext, useContext, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../services/api';
import { AuthContextData, AuthState } from './interface';

const AuthContext = createContext<AuthContextData>({} as AuthContextData);
export const AuthProvider: React.FC = ({ children }) => {
  const history = useHistory();
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@GoBarber:token');
    const user = localStorage.getItem('@GoBarber:user');
    if (token && user) {
      return { token, user: JSON.parse(user) };
    }
    return {} as AuthState;
  });
  const signIn = useCallback(
    async ({ email, password }) => {
      const response = await api.post('sessions', {
        email,
        password,
      });
      const { token, user } = response.data;
      localStorage.setItem('@GoBarber:token', token);
      localStorage.setItem('@GoBarber:user', JSON.stringify(user));
      setData({ token, user });
      history.push('/dashboard');
    },
    [history],
  );

  const signOut = useCallback(() => {
    localStorage.removeItem('@GoBarber:token');
    localStorage.removeItem('@GoBarber:user');
    setData({} as AuthState);
  }, []);
  return (
    <AuthContext.Provider value={{ signIn, user: data.user, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider!');
  }
  return context;
}
