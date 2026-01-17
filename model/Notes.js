const sequelize = require('../utils/db');
const { DataTypes } = require('sequelize');

const notes = sequelize.define('notes', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id'
        }
    },

    course_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: 'courses',
            key: 'id'
        }
    },
    desc: {
        type: DataTypes.STRING(150),
        allowNull: true
    },
    filePath: {
        type: DataTypes.STRING,
        allowNull: false
    },
    noteType: {
        type: DataTypes.ENUM,
        values: ["text", "image", "pdf", "doc"],
        allowNull: false
    }
});

module.exports = notes;