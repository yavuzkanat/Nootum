const sequelize = require('../utils/db');
const { DataTypes } = require('sequelize');


const comments = sequelize.define('comments', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey:true,
        autoIncrement: true,
        allowNull: false

    },
    user_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id'
        }
    },

    note_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: 'notes',
            key: 'id'
        }
    },
    commentText: {
        type: DataTypes.TEXT,
        allowNull: false,

    }
});

module.exports = comments;