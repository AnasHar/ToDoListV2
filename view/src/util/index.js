// Function to create a new todo
export const createTodo = async (todo) => {
	try {
		const res = await fetch("/api/todo/create", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(todo),
		});
		return res.json();
	} catch (error) {
		return { error };
	}
};

// Function to get all todos
export const getTodos = async () => {
	try {
		const res = await fetch("/api/todos");
		const data = await res.json();
		return data;
	} catch (error) {
		return { error };
	}
};

// Function to remove a specific todo by id
export const removeTodo = async (id) => {
	try {
		await fetch(`/api/todo/${id}`, {
			method: "DELETE",
		});
		return "deleted";
	} catch (error) {
		return { error };
	}
};
