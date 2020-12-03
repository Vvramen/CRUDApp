const express = require('express');
const todoController = require('../controllers/todo.controller')

const router = express.Router();
//const Todo = require('../models/todo.model');
console.log(router)

router.route('/users/:userId/todos')
    .post(todoController.createTodo)
    .patch(todoController.completeAllTodos)
    .delete(todoController.deleteCompletedTodos)
    .get(todoController.getTodos);

router.route('/users/:userId/todos/:todoId')
    .patch(todoController.toggleTodo)
    .delete(todoController.deleteTodo);

module.exports = router;