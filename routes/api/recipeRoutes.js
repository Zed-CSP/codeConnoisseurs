const router = require('express').Router();
const { Recipe, Ingredient, Recipe_Ingredient } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const recipeData = await Recipe.findAll();
        res.status(200).json(recipeData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/', async (req,res) => {
    try {
        // Get creator id
        const creator_id = req.body.creatorId;
        // Create recipe
        const newRecipe = await Recipe.create({ 
            ...req.body, 
            creator_id 
        });

        // Get ingredient data from name
        const ingredientData = await Ingredient.findAll({ 
            where: { 
                name: req.body.ingredientName 
            } 
        });
        const ingredient = ingredientData.map(ingredient => ingredient.get({ plain: true }));

        // Get data needed to create recipe_ingredient
        const amount = req.body.ingredientAmount;
        const measurement_unit = req.body.ingredientUnit;
        const recipe_id = newRecipe.id;
        const ingredient_id = ingredient[0].id;
        // Create recipe_ingredient
        const newRecIng = await Recipe_Ingredient.create({
            amount, 
            measurement_unit, 
            recipe_id, 
            ingredient_id
        });

        res.status(200).json({ message: 'Your recipe has been added!' });
    } catch (err) {
        res.status(500).json(err);
    }   
});

module.exports = router;