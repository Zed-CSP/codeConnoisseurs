const router = require('express').Router();
const userRoutes = require('./userRoutes');
const recipeRoutes = require('./recipeRoutes');
const ingredientRoutes = require('./ingredientRoutes');
const recipeIngredientRoutes = require('./recipeIngredientRoutes');


//so this is currently at /api 
router.use('/users', userRoutes);

router.use('/recipe', recipeRoutes);
router.use('/ingredients', ingredientRoutes);
router.use('/recipe_ingredient', recipeIngredientRoutes);


module.exports = router;
