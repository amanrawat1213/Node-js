const express = require('express');
const app = express();
const PORT = 3000;

// Parse URL-encoded data from HTML forms
app.use(express.urlencoded({ extended: true }));

// Temporary in-memory users array
let users = [];

// Home page: form to add user
app.get('/', (req, res) => {
  res.send(`
    <h2>Add a New User</h2>
    <form action="/users" method="POST">
      <input name="name" placeholder="Enter name" required />
      <button type="submit">Add User</button>
    </form>
    <br/>
    <a href="/users">View All Users</a>
  `);
});

// Handle form POST
app.post('/users', (req, res) => {
  const userName = req.body.name;
  users.push({ name: userName });
  res.send(`User ${userName} added! <a href="/">Go Back</a>`);
});

// View all users
app.get('/users', (req, res) => {
  let list = users.map(u => `<li>${u.name}</li>`).join('');
  res.send(`
    <h2>All Users</h2>
    <ul>${list}</ul>
    <a href="/">Add More Users</a>
  `);
});

app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
