var express = require('express');
var fs = require('fs');
var path = require('path');
var router = express.Router();

// Route to render the login page
router.get('/', (req, res) => {
    res.render('login', { error: null });
});

// Handle login form submission
router.post('/', (req, res) => {
    const { email, password } = req.body;

    // Read the users.json file
    fs.readFile(path.join(__dirname, '../users.json'), 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal Server Error');
        }

        const users = JSON.parse(data);

        // Check if the email and password match any user
        const user = users.find(user => user.email === email && user.password === password);

        if (user) {
            // Authentication successful
            res.redirect('/users');
        } else {
            // Authentication failed, render the login page with an error message
            res.render('login', { error: 'Invalid email or password' });
        }
    });
});

module.exports = router;