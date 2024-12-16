const express = require("express");
const router = express.Router();
const commentCtrl = require("../controllers/comment");
const upload = require("../middleware/comment/multer-config");
const validateToken = require("../middleware/comment/auth-validator");
const validateDate = require("../middleware/comment/date-validator");
const validateRating = require("../middleware/comment/rating-validator");
const validateComment = require("../middleware/comment/comment-validator");
const validateDifficulty = require("../middleware/comment/difficulty-validator");
const validateDuration = require("../middleware/comment/duration-validator");

// Définit les routes pour les différentes actions liées aux commentaires, associe les fonctions de contrôleurs appropriées à la méthode HTTP correspondante.

router.get("/get", commentCtrl.getComments);
router.post("/add", validateToken, upload.array("files", 3), validateDate, validateDuration, validateRating, validateComment, validateDifficulty, commentCtrl.addComment );
  

module.exports = router;