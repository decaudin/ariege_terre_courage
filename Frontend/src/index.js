import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Map from './pages/Map';
import Hikes from './pages/Hikes';
import HikingRetail from './pages/HikingRetail';
import NotFound from './pages/NotFound'
import Footer from './components/Footer';
import './index.css';
import GlobalStyle from './utils/style/GlobalStyle';
import { ThemeProvider, DataProvider } from './utils/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <GlobalStyle />
        <Header />
        <DataProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/map" element={<Map />} />
          <Route path="/hikes" element={<Hikes />} />
          <Route path="/hikes/:id" element={<HikingRetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </DataProvider>
        <Footer />
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);
