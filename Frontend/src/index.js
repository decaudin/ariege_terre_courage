import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import './index.css';
import GlobalStyle from './utils/style/GlobalStyle';
import { AuthProvider } from './utils/context/Auth';
import { ThemeProvider } from './utils/context/Theme';
import { DataProvider } from './utils/context/Hikes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <GlobalStyle />
        <DataProvider>
          <App />
        </DataProvider>
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>
);
