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
  res.render('employee', { employee: employee })
});

// US003
// Update an employee by ID form
// router.get('/update/:id', (req, res) => {
//   const user = userService.getUserById(parseInt(req.params.id));
//   if (!user) return res.status(404).send('User not found');
//   res.render('updateUser', {user: user})
// });

// // Update a user by ID
// router.post('/update/:id', (req, res) => {
//   const updatedUser = userService.updateUser(parseInt(req.params.id), req.body);
//   if (!updatedUser) return res.status(404).send('User not found');
//   res.redirect('/users/' + updatedUser.id)
// });

module.exports = router;