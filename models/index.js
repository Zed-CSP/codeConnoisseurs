const User = require('./User');
const Recipe = require('./Recipe');
const Ingredient = require('./Ingredient');
const Recipe_Ingredient = require('./Recipe_Ingredient');

User.hasMany(Recipe, {
    foreignKey: 'creator_id',
});

Recipe.belongsTo(User, {
    foreignKey: 'creator_id',
});

Recipe.belongsToMany(Ingredient, {
    through: Recipe_Ingredient,
});

Ingredient.belongsToMany(Recipe, {
    through: Recipe_Ingredient,
});

module.exports = {
    User,
    Recipe,
    Ingredient,
    Recipe_Ingredient,
};
