const router = require('express').Router();
const { Ingredient, Recipe, User, Recipe_Ingredient } = require('../../models');

router.get('/', (req, res) => {
    try {
        if(req.session.logged_in) {
            res.redirect('/home');
        } else {
            res.render('login');
        }
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
        // If user is logged in
        if (req.session.logged_in) {
            // Get all ingredients from the db
            const ingredientsData = await Ingredient.findAll({
                order: [
                    ['name', 'ASC'],
                ],
            });
            const ingredients = ingredientsData.map(ingredient => ingredient.get({ plain: true }));
    
            // Render template
            res.render('add-recipe', { 
                ingredients,
                showNav: true,
            });
        // If not logged in go to login screen
        } else {
            res.redirect('/');
        }
    } catch (error) {
        res.status(500).json({ error });
    }
});

//untested functionality for finding a recipe by id and page loading
router.get('/recipe/:id', async (req, res) => {
    try {
        const recipeData = await Recipe.findByPk(req.params.id, {
            include: [ 
                {
                    model: User,
                    attributes: ['first_name', 'last_name', 'id'],
                },
                {
                    model: Ingredient,
                    through: {Recipe_Ingredient}
                }
            ],
        });
        const recipe = recipeData.get({ plain: true });
        console.log(recipe);
        res.render('view-recipe', {
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
        // If user is logged in
        if (req.session.logged_in) {
            // Get all recipes from the db
            const recipeData = await Recipe.findAll({
                include: [{model: Ingredient, model: User}],
                order: [['createdAt', 'DESC']],
            });
            const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));
    
            console.log(recipes);
            // Render template
            res.render('home', { 
                recipes,
                showNav: true,
                firstName: req.session.user_fn,
            });
        // If not logged in go to login screen
        } else {
            res.redirect('/');
        }
    } catch (error) {
        res.status(500).json({ error });
    }
});

// Render page to view feed of all Recipes for User
router.get('/profile/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const recipeData = await Recipe.findAll({
            include: [{ model: Ingredient, model: User }],
            where: { creator_id: userId },
            order: [[ 'createdAt', 'DESC' ]],
        });
        const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));

        res.render('home', { 
            recipes,
            showNav: true,
            firstName: req.session.user_fn,
        });
    } catch (error) {
        res.status(500).json({ error });
    }
});

module.exports = router;