const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/videos', function (req, res, next) {
  res.send('respond with a resource');
});
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
