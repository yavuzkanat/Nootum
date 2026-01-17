const sequelize = require('../utils/db');

sequelize.sync({ force: true })
    .then(() => {
        console.log("Database & tables created!");

        // Buraya test verisi ekle
        return Users.create({
            nameSurname: "Ahmet Yavuzkanat",
            universityMail: "ahmet@ogrenci.edu.tr",
            passwd: "123456",
            university: "ITU",
            universityDepartment: "Computer Engineering",
            startYear: 2024,
            endYear: 2028,
            isVerified: true
        });
    })
    .then(user => {
        console.log("User created:", user.id);

        return Courses.create({
            courseCode: "MAT101",
            courseName: "Matematik I",
            university: "ITU",
            universityDepartment: "Computer Engineering"
        }).then(course => ({ user, course }));
    })
    .then(({ user, course }) => {
        console.log("Course created:", course.id);

        return Notes.create({
            desc: "Final Özeti",
            filePath: "/files/mat101_final.pdf",
            noteType: "pdf",
            user_id: user.id,
            course_id: course.id
        }).then(note => ({ user, note }));
    })
    .then(({ user, note }) => {
        console.log("Note created:", note.id);

        return Comments.create({
            commentText: "Bu not çok iyi",
            user_id: user.id,
            note_id: note.id
        }).then(() => note);
    })
    .then(note => {
        return Lisa.create({
            type: "like",
            user_id: note.user_id,
            note_id: note.id
        });
    })
    .then(() => {
        console.log("Test data inserted successfully!");
    })
    .catch(err => {
        console.error("Error:", err);
    });