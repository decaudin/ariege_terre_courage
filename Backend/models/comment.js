const mongoose = require("mongoose");

// Schéma de modèle de données pour un utilisateur

const commentSchema = mongoose.Schema({
  date: { type: String, required: true},
  rating: { type: Number, required: true, min: 1, max: 5},
  comment: { type: String, required: true },
  difficulty: { type: String, required: true },
  duration: {
    hours: { type: Number, required: true },
    minutes: { type: Number, required: true },
  },
  files: [{ type: String, required: true }],
  hikeId: { type: String, required: true },
  // Rajouter Userid
});

module.exports = mongoose.model("Comment", commentSchema); // Exportation du modèle d'utilisation créé à partir du schéma