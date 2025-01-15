var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // change title to "Kainos"
  res.render('index', { title: 'Kainos' });
});

module.exports = router;
