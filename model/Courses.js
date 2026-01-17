const sequelize = require('../utils/db');
const { DataTypes } = require('sequelize');


const courses = sequelize.define('courses', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    courseCode: {
        type: DataTypes.STRING(20),
        allowNull: false,

    },
    courseName: {
        type: DataTypes.STRING(150),
        allowNull: false,

    },
    university: {
        type: DataTypes.STRING(150),
        allowNull: false,

    },
    universityDepartment: {
        type: DataTypes.STRING(150),
        allowNull: false
    }

});

module.exports = courses;