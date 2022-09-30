const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Favorite extends Model { }

Favorite.init({

    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    clientId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'client',
            key: 'id',
        },
    },
    propertyId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'property',
            key: 'id',
        },
    },


},
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'favorite',
    });

module.exports = Favorite;