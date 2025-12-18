

// MAINPAGE 
exports.mainPage = (req,res,next) => {
    res.render('main/homepage.ejs',{
        tabHeader : "Ana Sayfa"
    });
};