const router = require('express').Router();
const userRoutes = require('./userRoutes');
const recipeRoutes = require('./recipeRoutes');
const ingredientRoutes = require('./ingredientRoutes');
const recipeIngredientRoutes = require('./recipeIngredientRoutes');


//so this is currently at /api 
router.use('/users', userRoutes);

router.use('/recipes', recipeRoutes);
router.use('/ingredients', ingredientRoutes);
router.use('/recipeingredient', recipeIngredientRoutes);


module.exports = router;
