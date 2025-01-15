var express = require('express');
var router = express.Router();

const EmployeeService = require('../services/employeeService');
const employeeService = new EmployeeService();

// Read all employees
router.get('/', (req, res) => {
    const employees = employeeService.getAllEmployees();
    res.render('employees', { employees: employees })
  });

  // Read a Employee by ID
router.get('/:id', (req, res) => {
    const employee = employeeService.getEmployeeById(parseInt(req.params.id));
    if (!employee) return res.status(404).send('Employee not found');
    res.render('employee', {employee:employee })
  });
  module.exports = router;