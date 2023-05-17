const router = require('express').Router();
const { Ingredient } = require('../../models');

//create new ingredient
router.post('/', async (req,res) => {
    try {
        const newIngredient = await Ingredient.create(req.body)
        res.status(200).json(newIngredient)
    } catch (err) {
        res.status(400).json(err);
    }   
})

router.get('/', async (req, res) => {
    try {
        const ingredientData = await Ingredient.findAll();
        res.status(200).json(ingredientData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;