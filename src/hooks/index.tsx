import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { Theme } from '../styles/themes/default';
import GlobalStyles from '../styles/global';
import { AuthProvider, useAuth } from './Auth';
import { ToastProvider, useToast } from './Toast';

const AppProvider: React.FC = ({ children }: any) => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <AuthProvider>
        <ToastProvider>
          <BrowserRouter>{children}</BrowserRouter>
        </ToastProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export { AppProvider, useAuth, useToast };
