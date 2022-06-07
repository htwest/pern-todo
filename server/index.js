const express = require("express");
const cors = require("cors");

const app = express();
const pool = require("./db");

const port = 5000;

//middleware
app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
