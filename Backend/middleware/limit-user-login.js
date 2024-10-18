// Limite les tentatives de connexion pour éviter les attaques force brute

const rateLimit = require("express-rate-limit");

const limitUserLogin = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 50,
  message: "Vous avez effectué trop de tentatives de connexion",
});

module.exports = limitUserLogin;