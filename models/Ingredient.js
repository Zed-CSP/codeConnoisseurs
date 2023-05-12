// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Ingredient model (table) by extending off Sequelize's Model class
class Ingredient extends Model {}

// set up fields and rules for Ingredient model
Ingredient.init(
    {
        //define columns
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        recipe_ingredient_id: {
            type: DataTypes.INTEGER,
            //not sure if this should be false or true
            allowNull: true,
            references: { model: 'recipe_ingredient', key: 'id' },
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'ingredient',
    }
);

module.exports = Ingredient;