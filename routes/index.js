var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('users', (req, res) => {
  res.render('users', { users });
});
;

module.exports = router;
