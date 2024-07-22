// Importing the express module
const express = require('express');

// Creating an instance of express
const app = express();

// Setting the port number
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to serve static files from the 'public' folder
app.use(express.static('public'));

// Route to handle GET requests to the root URL ('/')
app.get('/', (req, res) => {
  res.send('Welcome to Express!');
});

// Route to handle GET requests to the '/users' URL
app.get('/users', (req, res) => {
  const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
  ];
  res.json(users);
});

// Route to handle POST requests to the '/users' URL
app.post('/users', (req, res) => {
  const user = req.body;
  console.log(`User created: ${user.name}`);
  res.send(`User created: ${user.name}`);
});

// Starting the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});