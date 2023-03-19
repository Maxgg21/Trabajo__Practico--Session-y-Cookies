module.exports = (req,res,next)=>{
    if(req.cookies.cook && !req.session.user ){
        req.session.user = req.cookies.cook;
    }
    next()
}

