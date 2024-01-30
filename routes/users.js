var express = require('express');
var router = express.Router();
var db = require('../util/database')

/* GET users listing. */
router.get('/', function(req, res, next) {
  const sql = `SELECT * FROM users`;
  
  db.query(sql, function (error, results, fields) {
    res.render('users', { users: results })
  });

});

module.exports = router;
