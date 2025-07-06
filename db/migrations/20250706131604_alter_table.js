
exports.up = function (knex) {
    return knex.schema.alterTable('todos', (table) => {
        table.text('title').alter(); // convert from string to text
    });
};

exports.down = function (knex) {
    return knex.schema.alterTable('todos', (table) => {
        table.string('title', 255).alter(); // revert back to VARCHAR(255)
    });
};
