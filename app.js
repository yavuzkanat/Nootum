const express = require('express')
const app = express()
const mainRoutes = require('./routes/mainRoutes');



//pug-template
app.set('view engine', 'ejs');
app.set('views', './views');

// JS & Css files
app.use(express.static("public"));

//public-pages

app.use('',mainRoutes);

app.listen(1111,() => {

});