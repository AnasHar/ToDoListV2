const formidable = require("formidable");
const { create, get, remove } = require("../model/todo");

/**
 * Middleware function to create a new task in the todo list.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
exports.create = (req, res) => {
	const form = new formidable.IncomingForm();
	form.keepExtensions = true;
	form.parse(req, async (err, fields) => {
		const { description } = fields;

		if (!description) {
			return res.status(400).json({
				error: "Description is required",
			});
		}

		try {
			const newTask = await create(description);
			return res.status(201).send({ data: newTask.rows[0] });
		} catch (error) {
			return res.status(400).json({
				error: "Failed to add description to the database",
			});
		}
	});
};

/**
 * Middleware function to read all tasks in the todo list.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
exports.read = async (req, res) => {
	try {
		const task = await get();
		return res.json({ data: task.rows });
	} catch (err) {
		return res.status(400).json({
			error: err,
		});
	}
};

/**
 * Middleware function to remove a task from the todo list.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
exports.removeTodo = async (req, res) => {
	const id = Number(req.params.id);
	try {
		await remove(id);
		return res.status(200).send({ data: id });
	} catch (error) {
		return res.status(400).json({
			error,
		});
	}
};
