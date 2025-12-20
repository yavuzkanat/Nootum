const express = require('express')
const app = express()
const mainRoutes = require('./routes/mainRoutes');
const expressEjsLayouts = require('express-ejs-layouts');


// Pug-Template
app.set('view engine', 'ejs');
app.use(expressEjsLayouts);
app.set('views', './views');

// JS & CSS files
app.use(express.static("public"));

// Public Pages

app.use('',mainRoutes);

app.listen(1111,() => {

});