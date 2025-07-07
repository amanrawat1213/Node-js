// Import the express module
const express = require('express');

// Create an Express application
const app = express();

// Set the port number for the server
const port = 3000;

/*
 * 🔄 Application-level middleware
 * This middleware function will be executed for every request made to the app.
 */
app.use((req, res, next) => {
  // Log the requested URL to the console
  console.log(`📥 A request was made to: ${req.url}`);
  
  // Call next() to move to the next middleware or route handler
  next();
});

/*
 * 🏠 Route handler for the home page
 * This will run only when the user visits '/'
 */
app.get('/', (req, res) => {
  // Send a response back to the browser
  res.send('🎉 Hello from the homepage!');
});

/*
 * ℹ️ Route handler for the 'about' page
 * This will run when the user visits '/about'
 */
app.get('/about', (req, res) => {
  res.send('About Page');
});

/*
 * 🚀 Start the server and listen on the specified port
 * This allows the app to accept requests
 */
app.listen(port, () => {
  console.log(`🚀 Server is running at http://localhost:${port}`);
});
