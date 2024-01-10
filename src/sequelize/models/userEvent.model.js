const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('event', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        username: {
            allowNull: false,
            type: DataTypes.STRING,
            unique: false,
        },
        eventname: {
            allowNull: false,
            type: DataTypes.STRING,
            unique: false,
        },
        quantity:{
            allowNull: false,
            type: DataTypes.INTEGER,
            unique: false
        },
        price: {
            allowNull: false,
            type: DataTypes.DOUBLE,
            unique: false,
        }
    });
}