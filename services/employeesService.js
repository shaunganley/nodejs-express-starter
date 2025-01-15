// employeeService.js
const fs = require("fs");

class EmployeeService {
  constructor() {
    this.filePath = "employees.json";
  }

  // Helper function to read users from JSON file
  readEmployees() {
    try {
      const data = fs.readFileSync(this.filePath, "utf8");
      return JSON.parse(data);
    } catch (err) {
      console.error("Error reading employees:", err);
      return [];
    }
  }

  // Get all users
  getAllUsers() {
    return this.readUsers();
  }

  // Get a user by ID
  getUserById(id) {
    const users = this.readUsers();
    return users.find((user) => user.id === id);
  }
}

module.exports = UserService;
