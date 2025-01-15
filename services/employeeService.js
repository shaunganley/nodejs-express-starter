// EmployeeService.js
const fs = require('fs');

class EmployeeService {
    constructor() {
        this.filePath = "employees.json";
    }

    // Helper function to read Employees from JSON file
        readEmployees() {
            try {
                const data = fs.readFileSync(this.filePath, 'utf8');
                return JSON.parse(data);
            } catch (err) {
                console.error('Error reading Employees:', err);
                return [];
            }
        }

    // Get all Employees
    getAllEmployees() {
        return this.readEmployees();
    }

    // Get a employee by ID
    getEmployeeById(id) {
        const employee = this.readEmployees();
        return employee.find(employee => employee.id === id);
    }
}

module.exports = EmployeeService;