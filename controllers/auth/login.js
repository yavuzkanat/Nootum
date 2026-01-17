

exports.getLoginPage=(req,res,next) => {
    res.render('login/login.ejs',{
        tabHeader:'Login'
    })
}

