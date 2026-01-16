

//main page
exports.mainPage = (req, res, next) => {
    res.render('main/homePage.ejs', {

        tabHeader: "Ana Sayfa",

    });
};

exports.aboutPage = (req, res, next) => {

    res.render('main/aboutusPage.ejs'), {
       
        tabHeader: "Hakkımızda"
    }
}

exports.privacyPage = (req, res, next) => {
    res.render('main/privacyPage.ejs'), {
        
        tabHeader: "Gizlilik Sözleşmesi"
    }
}


