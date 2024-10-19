const express = require("express");
const { create, read, removeTodo } = require("../controller");

// Initialize the router object
const router = express.Router();

// Create POST route to create a todo
router.post("/todo/create", create);
// Create GET route to read todos
router.get("/todos", read);
// Create DELETE route to remove a todo
router.delete("/todo/:id", removeTodo);

// Export the router to make it available to the rest of the application
module.exports = router;
