const Comment = require("../models/comment");

// Fontion pour envoyer un commentaire sur une randonnée et l'enregistrer dans la BDD

exports.addComment = (req, res, next) => {
  const { date, hikeId, rating, comment, difficulty, duration } = req.body;

  const newComment = new Comment({
    date: new Date(date),
    hikeId,
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

exports.getComments = async (req, res, next) => {
    try {
        const comments = await Comment.find(); 
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération des commentaires", error });
    }
};

