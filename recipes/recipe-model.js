const db = require('../data/db-config');

function getRecipes() {
    return db('recipes')
}

function getInstructions(id) {
    return db('Steps').where({ recipe_id: id })
}

function getShoppingList(id) {
    return db('recipes_ingredients as ri')
        .join('recipes as r', 'r.id', 'ri.recipe_id')
        .join('ingredients as i', 'i.id', 'ri.ingredient_id')
        .select('r.recipe_name', 'i.ingredient_name', 'ri.quantity_in_grams')
        .where({ recipe_id: id })
}

module.exports = {getRecipes, getInstructions, getShoppingList}