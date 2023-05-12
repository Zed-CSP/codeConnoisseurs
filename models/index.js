//import models
const User = require('./User');
const Recipe = require('./Recipe');
const Ingredient = require('./Ingredient');


// User has many Recipes
User.hasMany(Recipe);
Recipe.belongsTo(User);

//Recipe has many Ingredients through Recipe_Ingredient
Recipe.belongsToMany(Ingredient, { through: 'Recipe_Ingredient' });
Ingredient.belongsToMany(Recipe, { through: 'Recipe_Ingredient' });

