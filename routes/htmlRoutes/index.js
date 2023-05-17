const router = require('express').Router();
const { Ingredient } = require('../../models');

router.get('/', (req, res) => {
    try {
        res.render('home');
    } catch (error) {
        res.status(500).json({ error });
    }
});

router.get('/signup', (req, res) => {
    try {
        res.render('signup');
    } catch (error) {
        res.status(500).json({ error });
    }
});

// Render page to add new recipe
router.get('/recipe/add', async (req, res) => {
    try {
        const ingredientsData = await Ingredient.findAll();
        let ingredients = ingredientsData.map(ingredient => ingredient.get({ plain: true }));

        if (ingredients.length === 0) {
            ingredients = [
                'apple',
                'banana',
                'jellybean',
                'potato',
                'tomato',
            ]
        }
       
        res.render('add-recipe', { 
            ingredients
        });
    } catch (error) {
        res.status(500).json({ error });
    }
});

module.exports = router;
