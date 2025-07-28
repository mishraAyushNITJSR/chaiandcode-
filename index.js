// Import express
const express = require('express');
require('dotenv').config();

// Create express app
const app = express();

// Set a port
const PORT = process.env.PORT || 3000;

// Define a route
app.get('/', (req, res) => {
  res.send('Hello Ayush! Your backend is running 🚀');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Welcome to ${process.env["APP-NAME"]}`);

  
});