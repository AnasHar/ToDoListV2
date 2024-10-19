const pool = require("./database");

/**
 * Inserts a new todo item with a given description into the todo table.
 * @param {string} description - The description of the todo item.
 * @returns {Promise} - A promise that resolves to the result of the insert query.
 */
const create = (description) =>
	pool.query("INSERT INTO todo (description) VALUES ($1) RETURNING *", [
		description,
	]);

/**
 * Retrieves all todo items from the todo table.
 * @returns {Promise} - A promise that resolves to the result of the select query.
 */
const get = () => pool.query("SELECT * FROM todo");

/**
 * Removes a todo item with a given id from the todo table.
 * @param {number} id - The id of the todo item.
 * @returns {Promise} - A promise that resolves when the delete operation completes.
 */
const remove = (id) => pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);

module.exports = {
	create,
	get,
	remove,
};
