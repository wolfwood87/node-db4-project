
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
    return knex('ingredients').insert([
        {ingredient_name: 'Sugar'},
        {ingredient_name: 'Water'},
        {ingredient_name: 'Cranberries'},
        {ingredient_name: 'Olive Oil'},
        {ingredient_name: 'Bacon'},
        {ingredient_name: 'Eggs'},
        {ingredient_name: 'Parmesan'},
        {ingredient_name: 'Pasta'},
        {ingredient_name: 'Mustard'},
        {ingredient_name: 'Mayonnaise'},
        {ingredient_name: 'Onion'},
      ]);
    };
