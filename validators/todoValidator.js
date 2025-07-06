const { body } = require('express-validator');

exports.todoValidationRules = [
  body('title')
    .trim()
    .notEmpty().withMessage('Title is required')
];
