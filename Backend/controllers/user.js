const bcrypt = require("bcrypt"); // utilisé pour crypter le mot de passe de l'utilisateur avant de l'enregistrer dans la base de données
const jwt = require("jsonwebtoken"); // utilisé pour attribuer un jeton d'authentification à un utilisateur au moment de la connexion
const User = require("../models/user");

// Fonction pour que l'utilisateur puisse s'enregistrer

exports.signup = (req, res, next) => {
  bcrypt
    .hash(req.body.password, 10) // Crypte le mdp fourni
    .then((hash) => {
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hash,
      });
      user
        .save() // enregistre l'utilisateur dans la BDD
        .then(() => {
          res.status(201).json({ message: "Utilisateur créé !" });
        })
        .catch((error) => {
          res.status(400).json({ error });
        });
    })
    .catch((error) => res.status(500).json({ error }));
};

// Fonction pour que l'utilisateur puisse se connecter

exports.login = (req, res, next) => {
  User.findOne({ email: req.body.email }) // recherche un utilisateur dans la BDD en utilisant l'email fourni dans le corps de la requête POST
    .then((user) => {
      if (user === null) {
        res
          .status(401)
          .json({ message: "Paire identifiant/mot de passe incorrecte" });
      } else {
        bcrypt
          .compare(req.body.password, user.password) // compare le mdp fourni dans la requête POST avec le mdp stocké dans la BDD de l'utilisateur à l'email correspondant
          .then((valid) => {
            if (!valid) {
              res.status(401).json({
                message: "Paire indentifiant/mot de passe incorrecte",
              });
            } else {
              res.status(200).json({
                userId: user._id, // Si les mdp correspondent --> réponse JSON contenant identifiant et token
                token: jwt.sign({ userId: user._id }, "RANDOM_TOKEN_SECRET", {
                  expiresIn: "4h",
                }),
              });
            }
          })
          .catch((error) => {
            res.status(500).json({ error });
          });
      }
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};