import { createSlice, nanoid } from "@reduxjs/toolkit";

// Initial state of the todos array
const initialState = {
	todos: [{ id: 1, text: "Hello world" }],
};

// Create a new slice of the Redux store called "todo"
export const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {
		// Function to add a new todo to the todos array
		addTodo: (state, action) => {
			const todo = {
				id: nanoid(), // Function to add a new todo to the todos array
				text: action.payload, // Get the text of the new todo from the action payload
			};
			state.todos.push(todo); // Add the new todo to the todos array
		},
		// Function to remove a todo from the todos array
		removeTodo: (state, action) => {
			state.todos = state.todos.filter((todo) => todo.id !== action.payload);
			// Filter out the todo with the matching ID from the todos array
		},
	},
});

// Export the addTodo and removeTodo action creators
export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
