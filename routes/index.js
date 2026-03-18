const express = require("express");
const router = express.Router();
const videoRouter = require("./video");
const usersRouter = require("./users");

router.use(usersRouter);
router.use(videoRouter);

module.exports = router;
