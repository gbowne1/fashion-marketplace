const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.static(path.join(__dirname, 'client', 'build')));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

// 404 Not Found
app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

// Server start
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});