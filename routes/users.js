const express = require('express');
const router = express.Router();
const { userController } = require('@/controller/index');

/* GET users listing. */
router.get('/', userController.getUsers);

/* POST create user */
router.post('/', userController.createUser);

/* POST register user */
router.post('/register', userController.registerUser);

/* GET user by ID */
router.get('/:id', userController.getUserById);

/* PUT update user */
router.put('/:id', userController.updateUser);

/* DELETE user */
router.delete('/:id', userController.deleteUser);

module.exports = router;
