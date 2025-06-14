const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from client/dist
app.use(express.static(path.join(__dirname, 'client', 'dist')));

// API health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'AgroTrace Pro is running' });
});

// Catch all handler: send back React's index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
