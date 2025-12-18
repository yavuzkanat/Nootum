const express = require('express')
const app = express()
const mainRoutes = require('./routes/mainRoutes');



// Pug-Template
app.set('view engine', 'ejs');
app.set('views', './views');

// JS & CSS files
app.use(express.static("public"));

// Public Pages

app.use('',mainRoutes);

app.listen(1111,() => {

});