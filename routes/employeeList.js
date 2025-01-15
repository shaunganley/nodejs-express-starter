var express = require('express');
var router = express.Router();

const UserService = require('../services/userService');
const userService = new UserService();


// Read all employees
router.get('/employees', (req, res) => {
  const employees = userService.getAllEmployees();
  res.render('employeeList', { employees: employees })
})

module.exports = router;