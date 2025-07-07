const model = require('../models/todoModel');

exports.getAllTodos = async (req,res) => {
    const todos = await model.getTodos();
    res.json(todos);
};

exports.getTodoById = async (req,res) => {
    const todo = await model.getTodoById(req.params.id);
    todo ? res.json(todo) :res.status(404).json({message: 'Not Found'});
}

exports.createTodo = async (req,res) => {
    const [newTodo] = await model.createTodo(req.body);
    res.status(201).json(newTodo)
}


exports.updateTodo = async (req,res) => {
    const [updated] = await model.updateTodo(req.params.id, req.body);
    updated ? res.json(updated) : res.status(400).json({message:'Not Updated'})
}

exports.deleteTodo = async (req,res) => {
    const deleted = await model.deleteTodo(req.params.id);
    deleted ? res.json({ deleted, message: 'Delete Successfully!' }) : res.status(400).json({message:'Deletion Failed !'})
}

exports.clearAllTodos = async (req, res) => {
  try {
    const count = await model.deleteAllTodos();
    res.status(200).json({ message: 'All tasks deleted successfully!', deletedCount: count });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete all tasks' });
  }
};









