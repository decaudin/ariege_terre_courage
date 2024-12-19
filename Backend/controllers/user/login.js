const bcrypt = require("bcrypt"); // utilisé pour crypter le mot de passe de l'utilisateur avant de l'enregistrer dans la base de données
const jwt = require("jsonwebtoken"); // utilisé pour attribuer un jeton d'authentification à un utilisateur au moment de la connexion
const User = require("../../models/user");

// Controller pour que l'utilisateur puisse se connecter

exports.login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email }); // recherche un utilisateur dans la BDD en utilisant l'email fourni dans le corps de la requête POST
    
    if (!user) {
      return res.status(401).json({ message: "Paire identifiant/mot de passe incorrecte" });
    }

    const valid = await bcrypt.compare(req.body.password, user.password); // compare le mdp fourni dans la requête POST avec le mdp stocké dans la BDD de l'utilisateur à l'email correspondant
    
    if (!valid) {
      return res.status(401).json({ message: "Paire identifiant/mot de passe incorrecte" });
    }

    return res.status(200).json({ // Si les mdp correspondent --> réponse JSON contenant identifiant et token généré
      userId: user._id,
      token: jwt.sign({ userId: user._id }, "RANDOM_TOKEN_SECRET", { expiresIn: "4h" }),
      userName: user.name
    });

  } catch (error) {
    console.error('Error during login:', error);
    return res.status(500).json({ error: "Problème de connexion au serveur. Veuillez réessayer plus tard." });
  }
};