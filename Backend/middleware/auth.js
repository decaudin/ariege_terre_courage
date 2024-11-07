const jwt = require("jsonwebtoken");

// Middleware pour récupérer et vérifier le token. Si ok stocker le userId dans l'objet req.auth

module.exports = (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return res.status(401).json({ message: "Token manquant" });
    }
    const token = req.headers.authorization.split(" ")[1]; // récupère le token à partir de l'en tête authorization de la requête, sépare avec split le bearer du token et prend le token [1]
    const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET"); // Vérifie et décode le token, si ok les infos décodées du token sont stockées dans la variable.
    const userId = decodedToken.userId; // extrait l'id à partir du token décodé
    req.auth = {
      userId: userId, // stocke l'id dans l'objet de requête --> accessible dans d'autres middlewares ou routes extérieures
    };
    next();
  } catch (error) {

    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ message: "Token expiré" });
    }
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ message: "Token invalide" });
    }
  
    return res.status(500).json({ message: "Erreur serveur", error });
  }
};