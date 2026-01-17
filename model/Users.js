const sequelize = require('../utils/db');
const { DataTypes } = require('sequelize');




const users = sequelize.define('users', {

    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        allowNull:false
    },
    nameSurname: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    universityMail: {
        type: DataTypes.STRING(150),
        allowNull: false,
    },
    passwd: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    university: {
        type: DataTypes.STRING(150),
        allowNull: false,

    },
    universityDepartment: {
        type: DataTypes.STRING(150),
        allowNull: false
    },
    startYear: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    endYear: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    isVerified: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }

});

module.exports = users;