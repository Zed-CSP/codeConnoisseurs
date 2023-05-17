const router = require('express').Router();
const { Recipe_Ingredient } = require('../../models');

//create new recipe_ingredient
router.post('/', async (req,res) => {
    try {
        const newRecIng = await Recipe_Ingredient.create(req.body)
        res.status(200).json(newRecIng)
    } catch (err) {
        res.status(400).json(err);
    }   
})

router.get('/', async (req, res) => {
    try {
        const recIngData = await Recipe_Ingredient.findAll();
        res.status(200).json(recIngData);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;

