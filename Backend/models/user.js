const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

// Schéma de modèle de données pour un utilisateur

const userSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true},
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userSchema.plugin(uniqueValidator); // Ajout du plugin au schéma

module.exports = mongoose.model("User", userSchema); // Exportation du modèle d'utilisation créé à partir du schéma