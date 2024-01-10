const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('event', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING,
            unique: true,
        },
        description:{
            allowNull: false,
            type: DataTypes.STRING,
            unique: false
        },
        price: {
            allowNull: false,
            type: DataTypes.DOUBLE,
            unique: false,
        },
        category: {
            allowNull: false,
            type: DataTypes.STRING,
            unique: false,
        },
        image: {
            allowNull: true,
            type: DataTypes.BLOB,
            unique: false,
        }
    });
}