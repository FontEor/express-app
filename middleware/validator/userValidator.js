const { body } = require('express-validator');

const userValidator = [
  body('name')
    .notEmpty()
    .withMessage('Name is required')
    .bail() // If the name is empty, stop further validation for this field
    .isLength({ min: 2 })
    .withMessage('Name must be at least 2 characters long'),
  body('email').isEmail().withMessage('Invalid email format'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
];

module.exports = {
  userValidator,
};
