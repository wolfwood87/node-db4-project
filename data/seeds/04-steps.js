
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
    return knex('steps').insert([
        {recipe_id: 1, step_number: 1, instruction: "Rinse Cranberries"},
        {recipe_id: 1, step_number: 2, instruction: "Boil Water with Sugar"},
        {recipe_id: 1, step_number: 3, instruction: "Add Cranberries, cook until they burst"},
        {recipe_id: 1, step_number: 4, instruction: "Let Cool"},
        {recipe_id: 2, step_number: 1, instruction: "Heat Water with salt"},
        {recipe_id: 2, step_number: 2, instruction: "Saute Bacon"},
        {recipe_id: 2, step_number: 3, instruction: "Beat eggs and half the cheese"},
        {recipe_id: 2, step_number: 4, instruction: "Toss pasta with bacon"},
        {recipe_id: 2, step_number: 5, instruction: "Add beaten egg mixture"},
        {recipe_id: 3, step_number: 1, instruction: "Steam Eggs"},
        {recipe_id: 3, step_number: 2, instruction: "Prep the eggs"},
        {recipe_id: 3, step_number: 3, instruction: "Make the filling"},
        {recipe_id: 3, step_number: 4, instruction: "Pipe or spoon mixture into egg white halves"},
      ]);
    };
