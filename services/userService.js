// userService.js
const fs = require('fs');

class UserService {
    constructor() {
        this.filePath = "users.json";
        // add employee file - RB
        this.employeeFile = "employee.json";
    }

    // Helper function to read users from JSON file
    readUsers() {
        try {
            const data = fs.readFileSync(this.filePath, 'utf8');
            return JSON.parse(data);
        } catch (err) {
            console.error('Error reading users:', err);
            return [];
        }
    }

    // Helper function to write users to JSON file
    writeUsers(users) {
        try {
            fs.writeFileSync(this.filePath, JSON.stringify(users, null, 2), 'utf8');
        } catch (err) {
            console.error('Error writing users:', err);
        }
    }

    // US001
    // Helper function to read employees from JSON file -RB
    readEmployees() {
        try {
            const data = fs.readFileSync(this.employeeFile, 'utf8');
            return JSON.parse(data);
        } catch (err) {
            console.error('Error reading employees:', err);
            return [];
        }
    }

    // US002
    // Helper function to write employees to JSON file
    writeEmployees(employees) {
        try {
            fs.writeFileSync(this.employeeFile, JSON.stringify(employees, null, 2), 'utf8');
        } catch (err) {
            console.error('Error writing employees:', err);
        }
    }

    // Get all users
    getAllUsers() {
        return this.readUsers();
    }

    // Get a user by ID
    getUserById(id) {
        const users = this.readUsers();
        return users.find(user => user.id === id);
    }

    // Create a new user
    createUser(newUser) {
        const users = this.readUsers();
        newUser.id = users.length ? users[users.length - 1].id + 1 : 1;
        users.push(newUser);
        this.writeUsers(users);
        return newUser;
    }

    // Update a user by ID
    updateUser(id, updatedUser) {
        const users = this.readUsers();
        const userIndex = users.findIndex(user => user.id === id);
        if (userIndex === -1) return null;

        updatedUser.id = id;
        users[userIndex] = updatedUser;
        this.writeUsers(users);
        return updatedUser;
    }

    // Delete a user by ID
    deleteUser(id) {
        const users = this.readUsers();
        const userIndex = users.findIndex(user => user.id === id);
        if (userIndex === -1) return null;

        const deletedUser = users.splice(userIndex, 1);
        this.writeUsers(users);
        return deletedUser[0];
    }

    //US001
    // Get all employees -RB
    getEmployees() {
        return this.readEmployees();
    }

    // US002
    // Create a new employee
    createEmployee(newEmployee) {
        const employees = this.readEmployees();
        newEmployee.number = employees.length ? employees[employees.length - 1].number + 1 : 1;
        employees.push(newEmployee);
        this.writeEmployees(employees);
        return newEmployee;
    }

    // Get an employee by employee number
    getEmployeeByNumber(number) {
        const employees = this.readEmployees();
        return employees.find(employee => employee.number === number);
    }

    // US003
    // Update an employee by employee number
    updateEmployee(employeeNumber, updatedEmployee) {
        const employees = this.readEmployees();
        const employeeIndex = employees.findIndex(employee => employee.number === employeeNumber);
        if (employeeIndex === -1) return null;

        updatedEmployee.number = employeeNumber;
        employees[employeeIndex] = updatedEmployee;
        this.writeEmployees(employees);
        return updatedEmployee;
    }
}

module.exports = UserService;
