const validateRating = (req, res, next) => {
    const rating = parseInt(req.body.rating, 10);
  
    if (isNaN(rating) || rating < 1 || rating > 5) {
      return res.status(400).json({ error: "La note doit être entre 1 et 5" });
    }
    next();
  };
  
module.exports = validateRating;
  