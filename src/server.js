const express = require('express');
const path = require('path');
const app = express();

// Middleware to add CORS headers for cross-origin isolation
app.use((req, res, next) => {
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
  res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
  next();
});

// Serve static files from the React app's build folder
app.use(express.static(path.join(__dirname, 'build')));

// Handle all other routes by sending back the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server on port 5000 or the environment's port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
