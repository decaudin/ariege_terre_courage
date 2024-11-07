const multer = require("multer");
const path = require("path");

// Configuration du stockage
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    console.log("Destination du fichier:", file.originalname);
    callback(null, "images"); // Dossier de stockage des images
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(" ").join("_"); // Remplace les espaces par des underscores
    const extension = path.extname(file.originalname); // Garde l'extension du fichier
    console.log("Nom final du fichier:", name + Date.now() + extension); 
    callback(null, name + Date.now() + extension); // Nom unique pour éviter les doublons
  },
});

// Configuration du filtre MIME pour autoriser uniquement les images
const fileFilter = (req, file, callback) => {
  const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
  if (allowedTypes.includes(file.mimetype)) {
    callback(null, true);
  } else {
    callback(new Error("Type de fichier non pris en charge"), false);
  }
};

// Application du stockage et du filtre à Multer
const upload = multer({
  storage: storage,
  limits: { fileSize: 3000 * 3000 * 5 }, // Limite de 5 Mo par fichier
  fileFilter: fileFilter,
});

module.exports = upload;