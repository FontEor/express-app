const express = require('express');
const router = express.Router();
const { userController } = require('@/controller/index');
const { userValidator, loginValidator } = require('@/middleware/validator/userValidator');
const { handleValidationErrors } = require('@/middleware/validator/validationErrorHandler');
const { authMiddleware } = require('@/utils/jwt');
/* POST register user */
router.post('/registers', handleValidationErrors(userValidator), userController.registerUser);
router.post('/logins', handleValidationErrors(loginValidator), userController.loginUser);

/* GET users listing. */
router.get('/', authMiddleware, userController.getUsers);

/* POST create user */
router.post('/', authMiddleware, userController.createUser);

/* GET user by ID */
router.get('/:id', authMiddleware, userController.getUserById);

/* PUT update user */
router.put('/:id', authMiddleware, userController.updateUser);

/* DELETE user */
router.delete('/:id', authMiddleware, userController.deleteUser);

module.exports = router;
