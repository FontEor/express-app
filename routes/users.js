const express = require("express");
const router = express.Router();
const { userController } = require("@/controller/index");
/* GET users listing. */
router.get("/", userController.getUsers);

module.exports = router;
