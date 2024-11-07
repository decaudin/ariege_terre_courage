const Comment = require("../models/comment");

// Fontion pour envoyer un commentaire sur une randonnée et l'enregistrer dans la BDD

exports.addComment = (req, res, next) => {
  const { date, rating, comment, difficulty, duration } = req.body;

  const newComment = new Comment({
    date: new Date(date),
    rating,
    comment,
    difficulty,
    duration,
    files: req.files.map((file) => file.path),
  });

  newComment
    .save()
    .then(() => {
      res.status(201).json({ message: "Commentaire ajouté avec succès !" });
    })
    .catch((error) => {
      console.error("Erreur lors de l'ajout du commentaire :", error);
      res.status(400).json({ error });
    });
};
