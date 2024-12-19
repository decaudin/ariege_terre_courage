const mongoose = require('mongoose');
const fs = require('fs');
const Comment = require("../../models/comment");

// Controller pour supprimer un commentaire stocké dans la BDD

exports.deleteComment = async (req, res, next) => {

  const commentId = req.params.id; // Récupération Id propre au commentaire
  const userId = req.auth.userId;  // Récupération Id sur user

  // Vérification si l'ID du commentaire est valide

  if (!mongoose.Types.ObjectId.isValid(commentId)) {
    return res.status(400).json({ message: "ID de commentaire invalide." });
  }

  try {
    // Vérifier si le commentaire existe

    const comment = await Comment.findById(commentId);
    if (!comment) {
      return res.status(404).json({ message: "Commentaire introuvable." });
    }

    // Vérifier que l'utilisateur est bien celui qui a créé le commentaire

    if (comment.userId.toString() !== userId) {
      return res.status(403).json({ message: "Vous n'êtes pas autorisé à supprimer ce commentaire." });
    }

    // Supprimer la ou les images associée(s) au commentaire

    if (comment.files && comment.files.length > 0) {
      comment.files.forEach((url) => {
        const filename = url.split("\\")[1]; // Récupération du nom du fichier
        fs.unlink(`images/${filename}`, (err) => {
          if (err) {
            console.error(`Erreur lors de la suppression de l'image ${filename} :`, err);
          } else {
            console.log(`Image ${filename} supprimée avec succès.`);
          }
        });
      });
    }

    // Supprimer le commentaire
    
    const deleted = await Comment.findByIdAndDelete(commentId);
    if (!deleted) {
      return res.status(500).json({ message: "Erreur lors de la suppression du commentaire." });
    }

    return res.status(200).json({ message: "Commentaire supprimé avec succès." });
  } catch (error) {
    console.error("Erreur lors de la suppression du commentaire :", error);
    return res.status(500).json({ message: "Erreur interne du serveur." });
  }
};
