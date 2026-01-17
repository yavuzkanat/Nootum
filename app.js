const express = require('express')
const app = express()
const notesRoutes = require('./routes/notesRoutes');
const loginRoutes = require('./routes/loginRoutes');
const Users = require('./model/Users');
const Courses = require('./model/Courses');
const Notes = require('./model/Notes');
const Lisa = require('./model/Lisa');
const Comments = require('./model/Comments');


// DB Relationships
Users.hasMany(Notes, { foreignKey: 'user_id' });
Notes.belongsTo(Users, { foreignKey: 'user_id' });

Courses.hasMany(Notes, { foreignKey: 'course_id' });
Notes.belongsTo(Courses, { foreignKey: 'course_id' });

Users.hasMany(Comments, { foreignKey: 'user_id' });
Comments.belongsTo(Users, { foreignKey: 'user_id' });

Notes.hasMany(Comments, { foreignKey: 'note_id' });
Comments.belongsTo(Notes, { foreignKey: 'note_id' });

Users.hasMany(Lisa, { foreignKey: 'user_id' });
Lisa.belongsTo(Users, { foreignKey: 'user_id' });

Notes.hasMany(Lisa, { foreignKey: 'note_id' });
Lisa.belongsTo(Notes, { foreignKey: 'note_id' });


// Pug-Template
app.set('view engine', 'ejs');


// JS & CSS files
app.use(express.static("public"));


// Public Pages
app.use('', notesRoutes);
app.use('',loginRoutes);

// test DB 



app.listen(1111, () => {

});