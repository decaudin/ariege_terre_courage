const validateDate = (req, res, next) => {
  const date = req.body.date;

  if (!date) {
    return res.status(400).json({ error: "La date est manquante. Veuillez fournir une date valide." });
  }

  const isValidDate = !isNaN(Date.parse(date));

  const inputDate = new Date(date);
  inputDate.setHours(0, 0, 0, 0);
  
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const isNotFutureDate = inputDate <= today;

  if (!isValidDate) {
    return res.status(400).json({ error: "La date fournie n'est pas valide. Assurez-vous qu'elle soit dans un format correct." });
  }

  if (!isNotFutureDate) {
    return res.status(400).json({ error: "La date ne peut pas être dans le futur. Veuillez fournir une date dans le passé ou aujourd'hui." });
  }
  
  next();
};

module.exports = validateDate;


