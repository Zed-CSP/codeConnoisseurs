const router = require('express').Router();
const { Ingredient, Recipe, User } = require('../../models');

router.get('/', (req, res) => {
    try {
        res.render('login');
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
        const ingredientsData = await Ingredient.findAll({
            order: [
                ['name', 'ASC'],
            ],
        });
        const ingredients = ingredientsData.map(ingredient => ingredient.get({ plain: true }));

        res.render('add-recipe', { 
            ingredients,
            showNav: true,
        });
    } catch (error) {
        res.status(500).json({ error });
    }
});

//untested functionality for finding a recipe by id and page loading
router.get('/recipe/:id', async (req, res) => {
    try {
        const recipeData = await Recipe.findByPk(req.params.id, {
            include: [{model: Ingredient}],
        });
        const recipe = recipeData.get({ plain: true });
        res.render('recipe', {
            recipe,
            showNav: true,
        })
    } catch (err) {
        res.status(500).json(err);
    }
});

// Render page to view feed of all Recipes
router.get('/home', async (req, res) => {
    try {
        const recipeData = await Recipe.findAll({
            include: [{model: Ingredient, model: User}],
            order: [['createdAt', 'DESC']],
        });
        const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));

        res.render('home', { 
            recipes,
            showNav: true,
        });
    } catch (error) {
        res.status(500).json({ error });
    }
});


// Render page to view feed of all Recipes for User
router.get('/profile', async (req, res) => {
    try {
        const userId = req.session.user_id;
        const recipeData = await Recipe.findAll({
            include: [{ model: Ingredient, model: User }],
            where: { creator_id: userId },
            order: [[ 'createdAt', 'DESC' ]],
        });
        const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));

        res.render('home', { 
            recipes,
            showNav: true,
        });
    } catch (error) {
        res.status(500).json({ error });
    }
});

module.exports = router;
