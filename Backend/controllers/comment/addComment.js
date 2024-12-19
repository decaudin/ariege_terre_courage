const Comment = require("../../models/comment");

// Controller pour enregistrer un commentaire sur une randonnée dans la BDD

exports.addComment = async (req, res, next) => {
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

        await newComment.save();

        return res.status(201).json({ message: "Commentaire ajouté avec succès !" });
    } catch (error) {
        console.error("Erreur lors de l'ajout du commentaire :", error);
        return res.status(500).json({ message: "Erreur interne du serveur.", error });
    }
};