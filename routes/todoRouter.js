const express = require('express');
const router = express.Router();
const controller = require('../controllers/dbController');
const validate = require('../middleware/validate');
const { todoValidationRules } = require('../validators/todoValidator');

// global routes
router.get('/', controller.getAllTodos)
router.get('/:id', controller.getTodoById)
router.post('/', todoValidationRules, validate, controller.createTodo)
router.put('/:id', todoValidationRules, validate, controller.updateTodo)
router.delete('/:id', controller.deleteTodo)


module.exports = router;