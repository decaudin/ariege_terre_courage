const mongoose = require('mongoose');

// Définition du schéma de données

const hikeSchema = new mongoose.Schema({
    id: String,
    title: String,
    description: String,
    length: Number,
    duration: Number,
    elevationStart: Number,
    elevationEnd: Number,
    images: [{ data: Buffer, contentType: String }],
    coordinates: [
        {
          lon: String,
          lat: String
        }
    ]
  });
  
  // Création d'un modèle à partir du schéma
  
  const Hike = mongoose.model('Hike', hikeSchema);

  module.exports = Hike;