const db = require('../db/db');

const getTodos = () => db('todos').select('*');

const getTodoById = (id) => db('todos').where({ id }).first();

const createTodo = (todoData) => db('todos').insert(todoData).returning('*');

const updateTodo = (id, updateData) => db('todos').where({ id }).update(updateData).returning('*');

const deleteTodo = async (id) => {
  const count = await db('todos').where({ id }).del();
  return count > 0; 
};

const deleteAllTodos = () => { return db('todos').del();};

module.exports = { getTodos, getTodoById, createTodo, updateTodo, deleteTodo, deleteAllTodos };