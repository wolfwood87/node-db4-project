
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
    return knex('recipes').insert([
        {recipe_name: 'rowValue1'},
        {recipe_name: 'rowValue2'},
        {recipe_name: 'rowValue3'}
      ]);
    });
};
