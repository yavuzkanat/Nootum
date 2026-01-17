



exports.getNotesFeed = (req,res,next) => {
    res.render('note/feed.ejs',{
        tabHeader : 'Keşfet'
    })
}