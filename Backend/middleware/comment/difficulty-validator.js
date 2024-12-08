const validateDifficulty = (req, res, next) => {
    const difficulty = req.body.difficulty;
  
    const validDifficulties = ['débutant', 'intermédiaire', 'difficile', 'expert'];
  
    if (!validDifficulties.includes(difficulty)) {
        return res.status(400).json({ error: "La difficulté doit être 'débutant', 'intermédiaire', 'difficile' ou 'expert'" });
    }
    next();
  };
  
module.exports = validateDifficulty;
  