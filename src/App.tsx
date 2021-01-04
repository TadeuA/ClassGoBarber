import React from 'react';
import { AppProvider } from './hooks';
import Routes from './routes';

const App: React.FC = () => (
  <AppProvider>
    <Routes />
  </AppProvider>
);
export default App;
