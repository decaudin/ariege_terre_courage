const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const dotEnv = require("dotenv").config({ path: "./.env" }); 

// Chemin d'accès au fichier JSON
const jsonFilePath = path.join(__dirname, '../Frontend/public/Data/salau.json');

// Récupération des valeurs des variables depuis le dotenv et connexion avec MongoDB

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const cluster = process.env.DB_CLUSTER;
const database = process.env.DB_NAME;

mongoose
  .connect(
    `mongodb+srv://${username}:${password}@${cluster}/${database}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

// Définition du schéma
const hikeSchema = new mongoose.Schema({
  id: String,
  title: String,
  description: String,
  length: String,
  duration: String,
  elevationStart: String,
  elevationEnd: String,
  imageUrls: [String],
});

// Définition du modèle
const Hike = mongoose.model('Hike', hikeSchema);

// Charger les données JSON depuis le fichier
const jsonData = fs.readFileSync(jsonFilePath);
const hikesData = JSON.parse(jsonData);

// Ajouter les données à la base de données
Hike.insertMany(hikesData)
  .then(() => {
    console.log('Les données ont été ajoutées à la base de données avec succès.');
    mongoose.connection.close();
  })
  .catch((error) => {
    console.error('Une erreur s\'est produite lors de l\'ajout des données à la base de données:', error);
    mongoose.connection.close();
  });
