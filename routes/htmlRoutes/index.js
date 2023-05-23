const router = require('express').Router();
const { Ingredient, Recipe, User, Recipe_Ingredient } = require('../../models');

const recipeRoutes = require('./recipeRoutes');

// send over to Recipe Routes for /recipe/:id and /recipe/add
router.use('/recipe', recipeRoutes);


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


// Render page to view feed of all Recipes
router.get('/home', async (req, res) => {
    try {
        // If user is logged in
        if (req.session.logged_in) {
            // Get all recipes from the db
            const recipeData = await Recipe.findAll({
                include: [{
                    model: User,
                    attributes: ['first_name', 'last_name', 'id'],
                },
                {
                    model: Ingredient,
                    through: {Recipe_Ingredient}
                },
            ],
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

// Redirect /profile to the logged in user's profile
router.get('/profile', async (req, res) => {
    try {
        // If user is logged in
        if (req.session.logged_in) {
            // Redirect to their profile using their id
            res.redirect(`/profile/${req.session.user_id}`);
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
            include: [
                {
                    model: User,
                    attributes: ['first_name', 'last_name', 'id'],
                },
                {
                    model: Ingredient,
                    through: {Recipe_Ingredient}
                },
            ],
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