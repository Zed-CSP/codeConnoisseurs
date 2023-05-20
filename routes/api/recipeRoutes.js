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

// POST /api/recipe (add recipe to db)
router.post('/', async (req,res) => {
    try {
        // Get creator id
        const creator_id = req.body.creatorId;
        // Create recipe
        const newRecipe = await Recipe.create({ 
            ...req.body, 
            creator_id 
        });

        // Get each ingredient id from name and add to ingredient object
        const ingredientsArr = req.body.ingredientsArr.map(async (ingredient) => {
            const ingredientData = await Ingredient.findOne({ where: { name: ingredient.name }});
            const ingredientPlain = ingredientData.get({ plain: true });
            ingredient.id = ingredientPlain.id;
            return ingredient;
        });

        // Wait for all promises to resolve
        Promise.all(ingredientsArr)
            // Then use each response to create each recipe_ingredient
            .then(responses => {
                responses.forEach(async (ingredient) => {
                    const ingredientObj = {
                        amount: ingredient.amount,
                        measurement_unit: ingredient.measurement_unit,
                        recipe_id: newRecipe.id,
                        ingredient_id: ingredient.id,
                    }
                    await Recipe_Ingredient.create(ingredientObj);
                });
        });

        res.status(200).json({ message: 'Your recipe has been added!' });
    } catch (err) {
        res.status(500).json(err);
    }   
});

module.exports = router;