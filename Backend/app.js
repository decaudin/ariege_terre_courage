const express = require('express');
const cors = require("cors");
const mongoose = require('mongoose');
const path = require('path'); //Essai
const userRoutes = require('./routes/user');
const commentRoutes = require('./routes/comment');
require('dotenv').config();

const app = express();

// Récupération des informations de connexion MongoDB depuis .env

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD; 
const cluster = process.env.DB_CLUSTER;
const database = process.env.DB_NAME;

//Connexion à MongoDB

mongoose
  .connect(
    `mongodb+srv://${username}:${password}@${cluster}/${database}?retryWrites=true&w=majority&appName=Cluster0`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

// Middleware pour CORS

app.use(cors({
  origin: "*",
  methods: "GET,POST,PUT,DELETE,PATCH,OPTIONS",
  allowedHeaders: "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
}));

// Middleware pour parser les requêtes en JSON

app.use(express.json());

// Expose le dossier "images" à la racine du Backend

app.use('/images', express.static(path.join(__dirname, 'images')));

// Définition des routes de l'API

app.use("/api/auth", userRoutes); // Les requêtes HTTP commençant par /api/auth seront gérées par les routes définies dans le module userRoutes
app.use("/api/comment", commentRoutes); // Les requêtes HTTP commençant par /api/comment seront gérées par les routes définies dans le module commentRoutes

module.exports = app;