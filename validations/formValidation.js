const {check} = require("express-validator");

module.exports = [
    check("nombreUsuario")
    .notEmpty().withMessage("El nombre es obligatorio").bail()
    .isLength({min:3}).withMessage("El nombre debe tener mas 3 caracteres y 8 caracteres"),

    
    check("emailUsuario")
    .notEmpty()
    .withMessage("El email es obligatorio").bail()
    .isEmail()
    .withMessage('No es un email'),

    check("edadUsuario")
    .notEmpty()
    .withMessage("El color es obligatorio").bail()
    .isInt({
        min:18, max:99
    })
    .withMessage("Mayor a 18 años y Menor a 99 años"),
    
] 