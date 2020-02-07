
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
    return knex('recipes_ingredients').insert([
        {recipe_id: 1, ingredient_id: 1, quantity_in_grams: 200},
        {recipe_id: 1, ingredient_id: 2, quantity_in_grams: 250},
        {recipe_id: 1, ingredient_id: 3, quantity_in_grams: 340},
        {recipe_id: 2, ingredient_id: 4, quantity_in_grams: 15},
        {recipe_id: 2, ingredient_id: 5, quantity_in_grams: 226},
        {recipe_id: 2, ingredient_id: 6, quantity_in_grams: 165},
        {recipe_id: 2, ingredient_id: 7, quantity_in_grams: 150},
        {recipe_id: 2, ingredient_id: 8, quantity_in_grams: 450},
        {recipe_id: 3, ingredient_id: 6, quantity_in_grams: 250},
        {recipe_id: 3, ingredient_id: 9, quantity_in_grams: 340},
        {recipe_id: 3, ingredient_id: 10, quantity_in_grams: 200},
        {recipe_id: 3, ingredient_id: 11, quantity_in_grams: 200},
      ]);
    };

