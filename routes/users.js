const express = require('express');
const router = express.Router();
const { userController } = require('@/controller/index');
const { userValidator } = require('@/middleware/validator/userValidator');
const { handleValidationErrors } = require('@/middleware/validator/validationErrorHandler');
/* GET users listing. */
router.get('/', userController.getUsers);

/* POST create user */
router.post('/', userController.createUser);

/* POST register user */
router.post('/register', handleValidationErrors(userValidator), userController.registerUser);

/* GET user by ID */
router.get('/:id', userController.getUserById);

/* PUT update user */
router.put('/:id', userController.updateUser);

/* DELETE user */
router.delete('/:id', userController.deleteUser);

module.exports = router;
