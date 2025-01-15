var express = require("express");
var router = express.Router();

const EmployeeService = require("../services/employeeService");
const employeeService = new EmployeeService();

// Read all employees
router.get("/", (req, res) => {
  const employees = employeeService.getAllEmployees();
  res.render("employees", { employees: employees });
});

module.exports = router;
