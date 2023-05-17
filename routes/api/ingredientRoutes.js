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

module.exports = router;