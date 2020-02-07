
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
    return knex('recipes').insert([
        {recipe_name: 'Cranberry Sauce'},
        {recipe_name: 'Pasta Carbonara'},
        {recipe_name: 'Deviled Eggs'}
      ]);
    };
