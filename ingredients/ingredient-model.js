const db = require('../data/db-config')

function getRecipesInverse(id) {
    return db('recipes_ingredients as ri')
        .join('recipes as r', 'r.id', 'ri.recipe_id')
        .join('ingredients as i', 'i.id', 'ri.ingredient_id')
        .select('r.recipe_name', 'i.ingredient_name')
        .where({ ingredient_id: id })
}

module.exports = {getRecipesInverse}