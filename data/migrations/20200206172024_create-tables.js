
exports.up = function(knex) {
  return (knex.schema
            .createTable('recipes', tbl => {
                tbl.increments();
                tbl.string('recipe_name', 128).notNullable();
            })
            .createTable('ingredients', tbl => {
                tbl.increments();
                tbl.string('ingredient_name', 128).notNullable();
            })
            .createTable('recipes_ingredients', tbl => {
                tbl.increments();
                tbl.integer('recipe_id').unsigned().notNullable().references('recipes.id').onDelete('CASCADE').onUpdate('CASCADE');
                tbl.integer('ingredient_id').unsigned().notNullable().references('ingredients.id').onDelete('CASCADE').onUpdate('CASCADE');
                tbl.float('quantity_in_grams').notNullable();
            })
            .createTable('steps', tbl => {
                tbl.increments();
                tbl.integer('step_number').notNullable();
                tbl.string('instruction', 128).notNullable();
                tbl.integer('recipe_id').unsigned().notNullable().references('recipes.id').onDelete('CASCADE').onUpdate('CASCADE');
            })
        )
};

exports.down = function(knex) {
  return (knex.schema
            .dropTableIfExists('steps')
            .dropTableIfExists('recipes_ingredients')
            .dropTableIfExists('ingredients')
            .dropTableIfExists('recipes')
    )
};
