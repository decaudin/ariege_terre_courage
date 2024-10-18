import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import './index.css';
import GlobalStyle from './utils/style/GlobalStyle';
import { ThemeProvider, DataProvider } from './utils/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ThemeProvider>
        <GlobalStyle />
        <DataProvider>
          <App />
        </DataProvider>
      </ThemeProvider>
  </React.StrictMode>
);
