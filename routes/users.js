var express = require('express');
var router = express.Router();

const UserService = require('../services/userService');
const userService = new UserService();

// Create a new user form
router.get('/add', (req, res) => {
  res.render('addUser')
});

// Create a new user submit
router.post('/add', (req, res) => {
  const newUser = req.body;
  const createdUser = userService.createUser(newUser);
  res.redirect('/users/' + createdUser.id)
});

// Read all users
router.get('/', (req, res) => {
  const users = userService.getAllUsers();
  res.render('users', { users: users })
});

// Read a user by ID
router.get('/:id', (req, res) => {
  const user = userService.getUserById(parseInt(req.params.id));
  if (!user) return res.status(404).send('User not found');
  res.render('user', { user: user })
});

// Update a user by ID form
router.get('/update/:id', (req, res) => {
  const user = userService.getUserById(parseInt(req.params.id));
  if (!user) return res.status(404).send('User not found');
  res.render('updateUser', {user: user})
});

// Update a user by ID
router.put('/:id', (req, res) => {
  const updatedUser = userService.updateUser(parseInt(req.params.id), req.body);
  if (!updatedUser) return res.status(404).send('User not found');
  res.redirect('/' + updatedUser.id)
});

// Delete a user by ID
router.delete('/users/:id', (req, res) => {
  const deletedUser = userService.deleteUser(parseInt(req.params.id));
  if (!deletedUser) return res.status(404).send('User not found');
  res.redirect('/')
});

module.exports = router;
