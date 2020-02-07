const express = require('express');

const Ingredients = require('./ingredient-model');

const router = express.Router();


router.get('/:id/recipes', (req, res) => {
    const { id } = req.params;
    Ingredients.getRecipesInverse(id)
        .then(rec => {
            res.status(200).json(rec)
        })
        .catch(err => {
            res.status(500).json({message: "Failed to retrieve recipes"})
        })
})

module.exports = router;