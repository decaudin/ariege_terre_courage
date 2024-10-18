const validUsername = (req, res, next) => {
    const username = req.body.name;

    const usernameRegex = /^[a-zA-Z0-9-_]{3,20}$/;

    if (!usernameRegex.test(username)) {
        return res.status(400).json({
            error: "Le pseudo doit contenir entre 3 et 20 caractères, sans espaces ni caractères spéciaux."
        });
    }

    next();
};

module.exports = validUsername;
