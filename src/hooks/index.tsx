import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { Theme } from '../styles/themes/default';
import GlobalStyles from '../styles/global';
import { AuthProvider, useAuth } from './Auth';

const AppProvider: React.FC = ({ children }: any) => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <AuthProvider>
        <BrowserRouter>{children}</BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
};

export { AppProvider, useAuth };
