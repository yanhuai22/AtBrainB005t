const express = require('express');
const app = express();

// Define routes
app.get('/', (req, res) => {
  res.send('Welcome to BrainBoost! Unlock your full potential with our courses and resources designed to improve your memory, focus, and cognitive abilities.');
});

app.get('/courses', (req, res) => {
  res.send('Choose from a wide range of courses designed to help you improve your memory, focus, and cognitive abilities.');
});

app.get('/resources', (req, res) => {
  res.send('Access our collection of resources, including brain games, meditation exercises, and study tips, to support your cognitive development.');
});

app.get('/register', (req, res) => {
  res.send('Ready to boost your brainpower? Register for our platform today and start your cognitive journey!');
});

// Start the server
app.listen(3000, () => {
  console.log('BrainBoost server is running on port 3000.');
});