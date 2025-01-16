// EmployeeService.js
const fs = require('fs');

class EmployeeService {
    constructor() {
        this.filePath = "employees.json";
        this.deletedFilePath = "employee_deletions.json";
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
    // Helper function to read Deleted Employees from JSON file   
        readDeletedEmployees() {
            try {
                const data = fs.readFileSync(this.deletedFilePath, 'utf8');
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

    // Get all deleted employee
    getAllDeletedEmployees() {
        return this.readDeletedEmployees();
    }

    // Update employee list
    writeEmployees(employees) {
        try {
            fs.writeFileSync(this.filePath, JSON.stringify(employees, null, 2), 'utf8');
        } catch (err) {
            console.error('Error writing employees:', err);
        }
    }

    writeDeletions(deletions) {
        try {
            fs.writeFileSync(this.deletedFilePath, JSON.stringify(deletions, null, 2), 'utf8');
        } catch (err) {
            console.error('Error writing deletions:', err);
        }
    }

    // Get a employee by ID
    getEmployeeById(id) {
        const employee = this.readEmployees();
        return employee.find(employee => employee.id === id);
    }

    // Delete a user by ID
    deleteEmployee(id) {
        const employees = this.readEmployees();
        const employeeIndex = employees.findIndex(employee => employee.id === id);
        if (employeeIndex === -1) return null;

        const deletedEmployee = employees.splice(employeeIndex, 1);
        this.writeEmployees(employees);
        this.addDeletedEmployee(deletedEmployee[0])
        return deletedEmployee[0];
    }

    addDeletedEmployee(oldEmployee) {
        const deletions = this.readDeletedEmployees();
        deletions.push(oldEmployee);
        this.writeDeletions(deletions);
        return oldEmployee;
    }
}

module.exports = EmployeeService;