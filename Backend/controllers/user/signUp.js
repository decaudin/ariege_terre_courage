const bcrypt = require("bcrypt"); // utilisé pour crypter le mot de passe de l'utilisateur avant de l'enregistrer dans la base de données
const User = require("../../models/user");

// Controller pour que l'utilisateur puisse s'enregistrer

exports.signUp = async (req, res, next) => {
  try {
      const existingUserByName = await User.findOne({ name: req.body.name });
      if (existingUserByName) {
          return res.status(400).json({ error: "Nom d'utilisateur déjà pris" });
      }

      const existingUserByEmail = await User.findOne({ email: req.body.email });
      if (existingUserByEmail) {
          return res.status(400).json({ error: "E-mail déjà utilisé" });
      }

      const hash = await bcrypt.hash(req.body.password, 10); // Crypte le mdp fourni
      const user = new User({
          name: req.body.name,
          email: req.body.email,
          password: hash,
      });

      await user.save(); // enregistre l'utilisateur dans la BDD
      res.status(201).json({ message: "Utilisateur créé !" });

  } catch (error) {
      console.error('Error during user sign-up:', error);
      res.status(500).json({ error: "Une erreur est survenue lors de l'enregistrement." });
  }
};