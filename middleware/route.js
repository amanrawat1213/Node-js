// Router-level middleware is applied to a specific router instance using router.use() or router.METHOD().
//  It only applies to routes defined within that particular router, making it perfect for modular applications 
//  where middleware is only relevant to specific groups of routes.

// This type of middleware is often used to group related routes 
// (e.g., all routes related to authentication or user management) and apply middleware logic to them.



const express = require('express');
const app = express();

// Create a router
const studentRouter = express.Router();

// Router-level middleware (works only for studentRouter)
studentRouter.use((req, res, next) => {
  console.log('Router-level middleware for student routes');
  next(); // Go to the next handler
});

// Route under studentRouter
studentRouter.get('/info', (req, res) => {
  res.send('Student Info Page');
});

// Mount the studentRouter on /student
app.use('/student', studentRouter);

app.get('/', (req, res) => {
  res.send('Welcome to the homepage!');
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
// log in by /student/info