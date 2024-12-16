const Comment = require("../models/comment");
const User = require("../models/user");

// Fontion pour envoyer un commentaire sur une randonnée et l'enregistrer dans la BDD

exports.addComment = (req, res, next) => {
  try {
    const { date, hikeId, rating, comment, difficulty, duration } = req.body;
    const files = req.files.map(file => file.path);
    const userId = req.auth.userId;

    const newComment = new Comment({
      date: new Date(date),
      hikeId,
      rating,
      comment,
      difficulty,
      duration,
      files,
      userId,
    });

    newComment
      .save()
      .then(() => {
        res.status(201).json({ message: "Commentaire ajouté avec succès !" });
      })
      .catch((error) => {
        console.error("Erreur lors de l'ajout du commentaire :", error);
        res.status(500).json({ message: "Erreur interne du serveur.", error });
      });
  } catch (error) {
    console.error("Erreur imprévue :", error);
    res.status(500).json({ message: "Erreur imprévue.", error });
  }
};

// Fonction pour récupérer les commentaires stockés dans la BDD

exports.getComments = async (req, res, next) => {
  try {
      const comments = await Comment.find(); 

      const commentsWithUserName = await Promise.all(
          comments.map(async (comment) => {
              const user = await User.findById(comment.userId); // Chercher l'utilisateur par son ID
              return {
                  ...comment.toObject(), // Convertir le commentaire en objet
                  userName: user.name,    // Ajouter le nom de l'utilisateur au commentaire
              };
          })
      );

      res.status(200).json(commentsWithUserName);
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erreur lors de la récupération des commentaires", error });
  }
};


