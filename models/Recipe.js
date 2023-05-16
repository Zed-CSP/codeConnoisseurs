// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Recipe model (table) by extending off Sequelize's Model class
class Recipe extends Model {}

// set up fields and rules for Recipe model
Recipe.init(
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

        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        instruction: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        recipe_reference_id: {
            type: DataTypes.INTEGER,
            //not sure if this should be false or true
            allowNull: false,
            references: { model: 'recipe_ingredient', key: 'recipe_reference_id' }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'recipe',
    }
);

module.exports = Recipe;