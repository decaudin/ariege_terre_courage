const express = require("express");
const router = express.Router();
const validUsername = require("../middleware/signup/name-validator");
const validEmail = require("../middleware/signup/email-validator");
const validPassword = require("../middleware/signup/password-validator");
const signUpCtrl = require("../controllers/user/signUp");
const loginCtrl = require("../controllers/user/login")
const limitUserLogin = require("../middleware/login/limit-user-login");

// Définit les routes pour l'inscription et la connexion, associe les fonctions de contrôleurs appropriées à la méthode HTTP POST correspondante.

router.post("/signup", validUsername, validEmail, validPassword, signUpCtrl.signUp);
router.post("/login", limitUserLogin, loginCtrl.login);

module.exports = router;