import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { Theme } from '../styles/themes/default';
import GlobalStyles from '../styles/global';

const AppProvider: React.FC = ({ children }: any) => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <BrowserRouter>{children}</BrowserRouter>
    </ThemeProvider>
  );
};

export { AppProvider };
