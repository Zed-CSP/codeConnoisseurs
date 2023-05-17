const router = require('express').Router();
const { Recipe } = require('../../models');

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
        const newRecipe = await Recipe.create(req.body)
        res.status(200).json(newRecipe)
    } catch (err) {
        res.status(500).json(err);
    }   
})
module.exports = router;