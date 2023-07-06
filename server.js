const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public')); // Serve static files from the 'public' folder
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Route for handling the login form submission
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Check if the username and password match a predefined user
    if (username === 'admin' && password === 'password') {
        res.send('Login successful!');
    } else {
        res.send('Invalid credentials!');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});