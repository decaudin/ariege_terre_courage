const passwordValidator = require("password-validator");

const passwordSchema = new passwordValidator();

passwordSchema
  .is()
  .min(8)
  .is()
  .max(20)
  .has()
  .uppercase()
  .has()
  .lowercase()
  .has()
  .digits()
  .has()
  .not()
  .spaces();

module.exports = (req, res, next) => {
  const userPassword = req.body.password;
  if (!passwordSchema.validate(userPassword)) {
    return res.status(400).json({
      error: `Mot de passe trop faible ${passwordSchema.validate(userPassword, {
        list: true, // Renvoi une liste des erreurs de validations spécifique
      })}`,
    });
  } else {
    next();
  }
};