var express = require('express');
var router = express.Router();

const EmployeeService = require('../services/employeeService');
const employeeService = new EmployeeService();


// Read all deleted employees
router.get('/', (req, res) => {
  const deletions = employeeService.getAllDeletedEmployees();
  res.render('deletions', { deletions: deletions })
});
  module.exports = router;