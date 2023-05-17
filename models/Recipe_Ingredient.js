// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Recipe_Ingredient model (table) by extending off Sequelize's Model class
class Recipe_Ingredient extends Model {}

// set up fields and rules for Recipe_Ingredient model
Recipe_Ingredient.init(
    {
        //define columns
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        amount: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: 1,
        },
        measurement_unit: {
            type: DataTypes.STRING,
        },
        recipe_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'recipe',
                key: 'id',
            },
        },
        ingredient_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'ingredient',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'recipe_ingredient',
    }
);

module.exports = Recipe_Ingredient;
