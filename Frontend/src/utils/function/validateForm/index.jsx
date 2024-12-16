export const validateForm = ({ date, duration, rating, comment, difficulty, files }) => {
    
    const newErrors = {};
    const today = new Date();
    const selectedDate = new Date(date);
    
    if (!date) {
        newErrors.date = "Oups, n'oubliez pas de choisir une date ! 📅";
    } else if (selectedDate > today) {
        newErrors.date = "Vous venez du futur ? On n'est pas prêts pour ça ! 🚀";
    }
    if (duration.hours <= 0 && duration.minutes <= 0) newErrors.duration = "Une petite durée serait sympa, non ? ⏳";
    if (rating <= 0) newErrors.rating = "Allez, donnez-nous une note, s'il vous plaît ! ⭐️";
    if (!comment || comment.length < 3) newErrors.comment = "On aimerait beaucoup lire votre commentaire ! 📝"; 
    if (!difficulty) newErrors.difficulty = "N'oubliez pas de choisir la difficulté ! 🎢";
    if (files.length === 0) newErrors.files = "Pensez à télécharger au moins une photo ! 📸";

    return newErrors;
};