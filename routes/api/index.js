const router = require('express').Router();
const userRoutes = require('./userRoutes');


//so this is currently at /api 
router.use('/users', userRoutes);

router.use('/ingredients', require('./ingredientRoutes'));
router.use('/recipes', require('./recipeRoutes'));
router.use('/recipeingredients', require('./recipeIngredientRoutes'));


module.exports = router;
