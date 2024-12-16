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

// 1 - Requête PUT et DELETE (comments)
// 2 - Rajouter un Input type checkBox Remeber Me pour s'il est cliqué stocker token et user dans localStorage sinon sessionStorage
// 3 - Possibilité modif pseudo (PUT user) ? Titre d'accueil personnalisé ? Message quand on se logg/delogg ?
// 4 - Burger Menu (plus de place dans navBar à caus de contact)
// 5 - Formulaire contact
// 6 - Balise sémantique vérifier
// 7 - Vérif tout le responsive
// 8 - Gérer accessibilité (--> P6 FishEye)
// 9 - SEO (Helmet ?)
// 10 - Déploiement ?
