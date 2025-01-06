import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
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

// 1 - Messages d'erreurs Login ( --> modèle Sign Up)
// 2 - Requête PUT (comments)
// 3 - Possibilité modif pseudo (PUT user) ?
// 4 - Burger Menu (plus de place dans navBar à caus de contact)
// 5 - Formulaire contact
// 6 - Balise sémantique vérifier
// 7 - Vérif tout le responsive
// 8 - Gérer accessibilité (--> P6 FishEye)
// 9 - SEO (Helmet ?)
// 10 - Déploiement ?
