const jwt = require("jsonwebtoken");

// Middleware d'authentification pour vérifier le token et extraire l'userId

const validateToken = (req, res, next) => {

  const sendError = (status, message) => {
    return res.status(status).json({ status: "error", message });
  };

  try {

    if (!req.headers.authorization) {
      return sendError(401, "Token manquant");
    }

    const token = req.headers.authorization.split(" ")[1];// récupère le token à partir de l'en tête authorization de la requête, sépare avec split le bearer du token et prend le token [1]
    if (!token) {
      return sendError(401, "Token mal formaté");
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET || "RANDOM_TOKEN_SECRET"); // Vérifie et décode le token, si ok les infos décodées du token sont stockées dans la variable.

    req.auth = { userId: decodedToken.userId }; // Extraction de l'userId et ajout à l'objet req
    next();
  } catch (error) {

    if (error.name === "TokenExpiredError") {
      return sendError(401, "Token expiré");
    }
    if (error.name === "JsonWebTokenError") {
      return sendError(401, "Token invalide");
    }

    return res.status(500).json({ status: "error", message: "Erreur serveur", error: error.message });
  }
};

module.exports = validateToken;
