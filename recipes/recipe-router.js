const express = require('express');

const Recipes = require('./recipe-model');

const router = express.Router();

router.get('/', (req, res) => {
    Recipes.getRecipes()
        .then(recipes => {
            res.status(200).json(recipes)
        })
        .catch(err => {
            res.status(500).json({message: "Failed to get recipes"})
        })
})

router.get('/:id/shoppingList', (req, res) => {
    const { id } = req.params;
    Recipes.getShoppingList(id)
        .then(shop => {
            res.status(200).json(shop)
        })
        .catch(err => {
            res.status(500).json({message: "Failed to retrieve shopping list"})
        })
})

router.get('/:id/instructions', (req, res) => {
    const { id } = req.params;
    Recipes.getInstructions(id)
        .then(instr => {
            res.status(200).json(instr)
        })
        .catch(err => {
            res.status(500).json({message: "Failed to retrieve instructions"})
        })
})

module.exports = router;