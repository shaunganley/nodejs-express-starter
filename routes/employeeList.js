var express = require('express');
var router = express.Router();

const UserService = require('../services/userService');
const userService = new UserService();


// Read all employees
router.get('/', (req, res) => {
  const employees = userService.getEmployees();
  res.render('employeeList', { employees: employees })
})

module.exports = router;