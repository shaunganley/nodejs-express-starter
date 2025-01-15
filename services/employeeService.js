const fs = require("fs");
const path = require("path");

class EmployeeService {
  constructor() {
    this.filePath = path.join(__dirname, "../employees.json");
  }

  // Helper function to read employees from JSON file
  readEmployees() {
    try {
      const data = fs.readFileSync(this.filePath, "utf8");
      return JSON.parse(data);
    } catch (err) {
      console.error("Error reading employees:", err);
      return [];
    }
  }

  // Get all employees
  getAllEmployees() {
    return this.readEmployees();
  }
}

module.exports = EmployeeService;
