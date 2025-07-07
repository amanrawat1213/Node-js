// Middleware in Express refers to functions that process requests before reaching the route handlers. 
// These functions can modify the request and response objects, end the request-response cycle, or call the next middleware function. 
// Middleware functions are executed in the order they are defined. They can perform tasks like authentication, 
// logging, or error handling. Middleware helps separate concerns and manage complex routes efficiently.


// Syntax

// app.use((req, res, next) => {
//     console.log('Middleware executed');
//     next();
// });

// (req, res, next) => {}: This is the middleware function where you can perform actions on the request and response objects 
// before the final handler is executed.
// next(): This function is called to pass control to the next middleware in 
// the stack if the current one doesn't end the request-response cycle.



// What Middleware Does in Express.js
// Middleware functions in Express.js can perform several important tasks:

// Execute Code: Middleware can run any code when a request is received.
// Modify Request and Response: Middleware can modify both the request (req) and response (res) objects.
// End the Request-Response Cycle: Middleware can send a response to the client, ending the cycle.
// Call the Next Middleware: Middleware can call next() to pass control to the next function in the middleware stack.


// Types of Middleware

// 1. Application-level Middleware
// Application-level middleware is bound to the entire Express application using app.use() or app.METHOD(). 
// It executes for all routes in the application, regardless of the specific path or HTTP method.

// This type of middleware is commonly used for tasks like logging, body parsing, authentication checks, 
// or setting headers for every incoming request.
// example in application.js

// 2. Router-level Middleware
// Router-level middleware is applied to a specific router instance using router.use() or router.METHOD(). 
// It only applies to routes defined within that particular router, making it perfect for modular applications
//  where middleware is only relevant to specific groups of routes.

// This type of middleware is often used to group related routes 
// (e.g., all routes related to authentication or user management) and apply middleware logic to them.


// Built-in Middleware
// Express provides built-in middleware to help with common tasks, like serving static files or parsing data.

// For example, express.static() serves files like images, and express.json() helps parse incoming JSON data.

const express = require('express')
const app = express()
const port = 3000
// example to understand how an inbuilt middleware looks like
// app.use(express.static("public"))
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
