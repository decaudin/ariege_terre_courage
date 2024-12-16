#  Randonnées en Couserans 

**Bonjour et bienvenue sur l'application !**

Explorez différentes randonnées dans le Couserans, visualisez leur parcours sur une carte interactive et partagez vos avis et expériences avec la communauté.

**Bonnes randonnées à toutes et à tous !**

## Installation et Exécution:

### Cloner le projet :

`git clone https://github.com/decaudin/ariege_terre_courage.git`


### Configurer la base de données MongoDB :

1. Créez une base de données sur MongoDB Atlas.
2. Récupérez l'URL de connexion depuis l'interface MongoDB Atlas.
3. Créez un fichier .env à la racine du dossier Backend et ajoutez-y les variables suivantes, en remplaçant les valeurs par celles récupérées dans MongoDB Atlas.

DB_USERNAME=VotreNomUtilisateur
DB_PASSWORD=VotreMotDePasse
DB_CLUSTER=VotreNomDeCluster
DB_NAME=VotreNomDeBDD 


### Lancer le Backend :

```
cd Backend
npm install
npm start
```

### Lancer le Frontend :

```
cd Frontend
npm install
npm start
```

L'application sera alors accessible sur `http://localhost:3000`.
