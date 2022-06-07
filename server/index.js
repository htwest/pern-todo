const express = require("express");
const cors = require("cors");

const app = express();
const pool = require("./db");

const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});

// ROUTES

// Create Todo

app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES($1)",
      [description]
    );

    res.json(newTodo);
  } catch (err) {
    console.error(err.message);
  }
});
// Get All Todo's

// Get a Todo

// Update a Todo

// Delete a Todo
