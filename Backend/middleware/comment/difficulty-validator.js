const validateDifficulty = (req, res, next) => {
    const difficulty = req.body.difficulty;
  
    const validDifficulties = ['beginner', 'intermediate', 'hard', 'expert'];
  
    if (!validDifficulties.includes(difficulty)) {
        return res.status(400).json({ error: "La difficulté doit être 'beginner', 'intermediate', 'hard' ou 'expert'" });
    }
    next();
  };
  
module.exports = validateDifficulty;
  