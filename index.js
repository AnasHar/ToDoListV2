const express = require("express");
require("dotenv").config();

// Import routes
const todoRoutes = require("./routes/todo");

// Running express server
const app = express();
const port = process.env.PORT || 8000;

// Use express middleware to parse JSON
app.use(express.json());

// Route middlewares
app.use("/api", todoRoutes);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
