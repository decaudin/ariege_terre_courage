const Comment = require("../../models/comment");
const User = require("../../models/user");

// Controller pour récupérer les commentaires stockés dans la BDD

exports.getComments = async (req, res, next) => {

    try {
        const { hikeId } = req.params;
        const comments = await Comment.find({ hikeId }); 

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