const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Path to users.json file
const usersFilePath = './users.json';

// Route to handle the form submission
app.post('/users/add', (req, res) => {
  const { employeeNumber, name, email, password, role, address, salary } = req.body;

  // Validate form inputs
  if (!employeeNumber || !name || !email || !password || !role || !address || !salary) {
    return res.status(400).send('All fields are required.');
  }

  // Create a new user object
  const newUser = {
    id: Date.now(), // Use timestamp as a unique ID
    "employee number": employeeNumber,
    name,
    email,
    password,
    role,
    address,
    salary,
  };

  // Read existing users from the file
  fs.readFile(usersFilePath, 'utf8', (err, data) => {
    let users = [];
    if (!err) {
      try {
        users = JSON.parse(data);
      } catch (parseErr) {
        console.error('Error parsing JSON:', parseErr);
      }
    }

    // Add the new user to the array
    users.push(newUser);

    // Write updated users back to the file
    fs.writeFile(usersFilePath, JSON.stringify(users, null, 2), (writeErr) => {
      if (writeErr) {
        console.error('Error writing to file:', writeErr);
        return res.status(500).send('Internal Server Error.');
      }

      res.send('User added successfully!');
    });
  });
});

// Serve the form on the home page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});