var express = require('express');
var router = express.Router();

const UserService = require('../services/userService');
const userService = new UserService();

//US001
// Read all employees 
router.get('/', (req, res) => {
  const employees = userService.getEmployees();
  res.render('employeeList', { employees: employees })
})

//US002
// Create a new employee form
router.get('/add', (req, res) => {
  res.render('addEmployee')
});

// Create a new employee submit
router.post('/add', (req, res) => {
  const newEmployee = req.body;
  const createdEmployee = userService.createEmployee(newEmployee);
  res.redirect('/employees/' + createdEmployee.number)
});

// Read an employee by employee number
router.get('/:number', (req, res) => {
  const employee = userService.getEmployeeByNumber(parseInt(req.params.number));
  //if (!employee) return res.status(404).send('Employee not found');
  res.render('employee', {employee: employee})
});

// US003
// Update an employee by employee number form
router.get('/update/:number', (req, res) => {
  const employee = userService.getEmployeeByNumber(parseInt(req.params.number));
  if (!employee) return res.status(404).send('Employee not found');
  res.render('updateEmployee', {employee: employee})
});

// Update an employee by employee number
router.post('/update/:number', (req, res) => {
  const updatedEmployee = userService.updateEmployee(parseInt(req.params.number), req.body);
  if (!updatedEmployee) return res.status(404).send('Employee not found');
  res.redirect('/employees/' + updatedEmployee.number)
});

module.exports = router;