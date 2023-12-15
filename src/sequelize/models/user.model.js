const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('user', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        email: {
            allowNull: false,
            type: DataTypes.STRING,
            unique: true,
        },
        password:{
            allowNull: false,
            type: DataTypes.STRING,
            unique: false
        },
        phone: {
            allowNull: false,
            type: DataTypes.INTEGER,
            unique: false,
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING,
            unique: false,
        },
        lastName: {
            allowNull: false,
            type: DataTypes.STRING,
            unique: false,
        }
    });
}