// Routing
// Routing refers to how an application’s endpoints (URIs) respond to client requests. For an introduction to routing, 
// see Basic routing.

// You define routing using methods of the Express app object that correspond to HTTP methods; for example, 
// app.get() to handle GET requests and app.post to handle POST requests. For a full list, see app.METHOD. You can also use app.all
// () to handle all HTTP methods and app.use() to specify middleware as the callback function

// Route methods
// A route method is derived from one of the HTTP methods, and is attached to an instance of the express class.

// The following code is an example of routes that are defined for the GET and the POST methods to the root of the app.
const express = require('express')
const app = express()
const port = 4000
// is used in an Express.js application to serve static files 
// (like HTML, CSS, JavaScript, images, fonts, etc.) from the public directory.
// It will serve the index.html file inside the public folder.
app.use(express.static("public"));
app.get('/', (req, res) => {
  res.send('Hello World!3')
})
app.post('/', (req, res) => {
  console.log("Its a post request")
  res.send('Hello World post!')
})
app.put('/', (req, res) => {
  console.log("Its a put request")
  res.send('Hello World after put!')
})


app.get('/index', (req, res) => {
  console.log("Its an index")
  // res.send('Hello World index')
  res.sendFile('templates/index.html', { root: __dirname })
})

app.listen(port, () => {
  console.log(`Example ap listening on port ${port}`)
})
