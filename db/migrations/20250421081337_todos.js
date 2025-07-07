
exports.up = function(knex) {
    return knex.schema.createTable('todos', (table) => {
        table.increments('id').primary();
        table.string('title').notNullable();
        table.timestamps(true, true);
        // table.boolean('completed').defaultTo(false);
      });
};


exports.down = function(knex) {
    return knex.schema.dropTable('todos');
};
