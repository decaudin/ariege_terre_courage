const express = require("express");
const router = express.Router();
const validUsername = require("../middleware/name-validator");
const validEmail = require("../middleware/email-validator");
const validPassword = require("../middleware/password-validator");
const userCtrl = require("../controllers/user");
const limitUserLogin = require("../middleware/limit-user-login");

// Définit les routes pour l'inscription et la connexion, associe les fonctions de contrôleurs appropriées à la méthode HTTP POST correspondante.

router.post("/signup", validUsername, validEmail, validPassword, userCtrl.signup);
router.post("/login", limitUserLogin, userCtrl.login);

module.exports = router;