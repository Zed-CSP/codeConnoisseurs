const recipe_ingredient = require('./recipe_ingredient');

const recipe_ingredientData = [
    {

    }
];

const seedRecipe_Ingredient = () => recipe_ingredient.bulkCreate(recipe_ingredientData);
module.exports = seedRecipe_Ingredient;