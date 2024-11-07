const validateDuration = (req, res, next) => {
    const { hours, minutes } = req.body.duration;
    const duration = parseInt(hours, 10) + (parseInt(minutes, 10) / 60);

    if (isNaN(duration) || duration < 1 || duration > 24) {
      return res.status(400).json({ error: "La durée doit être comprise entre 1 et 24 heures" });
    }
    next();
  };
  
module.exports = validateDuration;
  