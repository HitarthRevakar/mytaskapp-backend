const express = require('express');
const router = express.Router();
const controller = require('../controllers/dbController')

router.get('/', controller.getAllTodos)
router.get('/:id',controller.getTodoById)
router.post('/',controller.createTodo)
router.put('/:id',controller.updateTodo)
router.delete('/:id',controller.deleteTodo)


module.exports = router;