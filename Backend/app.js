const express = require('express');
const cors = require("cors");
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
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

// Définition des routes de l'API

app.use("/api/auth", userRoutes); // Les requêtes HTTP commençant par /api/auth seront gérées par les routes définies dans le module userRoutes

module.exports = app;