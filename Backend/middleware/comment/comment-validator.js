const validateComment = (req, res, next) => {
    const comment = req.body.comment;
  
    if (!comment || comment.trim().length < 3) {
      return res.status(400).json({ error: "Le commentaire doit contenir au moins 3 caractères." });
    }
    next();
  };
  
module.exports = validateComment;
  