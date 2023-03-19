const {validationResult} = require("express-validator");

module.exports = {
    index: (req, res) => res.render('index', {
        session: req.session 
    }),

    send: (req, res) => {
        let errors = validationResult(req);

        if(errors.isEmpty()){
            const {nombreUsuario, emailUsuario, edadUsuario, colorSelecionado, check} = req.body
            req.session.user = {
                nombreUsuario,
                emailUsuario,
                edadUsuario,
                colorSelecionado,
                check
            }
            
            if(check){
                res.cookie("cook", req.session.user, {maxAge:10000*30 ,  httpOnly: true} )
            }
            res.redirect("/")
        }else{
            res.render("index", {
                errors: errors.mapped(),
                old: req.body,
                session: req.session 
                })
        }
    },
    next: (req, res) => {
        return res.render("home", {
            session: req.session 
        })
    },
    olvidar: (req, res) => {
        req.session.destroy();
        res.cookie("cook", null, {maxAge: -1})
        return res.redirect("/")
     }
}