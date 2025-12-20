

// main page
exports.mainPage = (req,res,next) => {
    res.render('main/homepage.ejs',{
        tabHeader : "Ana Sayfa",
        layout:'layouts/mainPagesTemplate'
    });
};

//about us
exports.aboutPage = (req,res,next) => {
    res.render('main/aboutusPage.ejs',{
        tabHeader: "Biz",
        layout:'layouts/mainPagesTemplate' 
    });
}