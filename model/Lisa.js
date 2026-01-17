const sequelize = require('../utils/db');
const { DataTypes } = require('sequelize');

const lisa = sequelize.define('lisa', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
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
    type: {
        type: DataTypes.ENUM,
        values: ['like', 'save'],

    }
});

module.exports = lisa;