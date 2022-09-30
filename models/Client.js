const { Model, DataTypes } = require('sequelize');
// const bcrypt = require('bcrypt');
const sequelize = require('../config/connection.js');

class Client extends Model { }

Client.init(
    {
        // define columns
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.TEXT,
            allowNull: false,
            // validate: {
            //     len: [8],
            // },
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    },
    {
        // hooks: {
        //     beforeCreate: async (newClientData) => {
        //         newClientData.password = await bcrypt.hash(newClientData.password, 10);
        //         return newClientData;
        //     },
        //     beforeUpdate: async (updatedClientData) => {
        //         updatedClientData.password = await bcrypt.hash(updatedClientData.password, 10);
        //         return updatedClientData;
        //     },
        // },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'client',
    }
);

module.exports = Client;