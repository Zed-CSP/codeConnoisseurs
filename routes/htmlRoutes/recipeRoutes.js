const router = require('express').Router();
const { Ingredient, Recipe, User, Recipe_Ingredient } = require('../../models');

router.get('/add', async (req, res) => {
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
                userID: req.session.user_id,
            });
        // If not logged in go to login screen
        } else {
            res.redirect('/');
        }
    } catch (error) {
        res.status(500).json({ error });
    }
});

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