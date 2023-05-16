const router = require('express').Router();
const { Recipe } = require('../../models');

router.get('/', (req, res) => {
});

router.post('/', async (req,res) => {
    try {
        const newRecipe = await Recipe.create(req.body)
        res.status(200).json(newRecipe)
    } catch (err) {
        res.status(400).json(err);
    }   
})
module.exports = router;