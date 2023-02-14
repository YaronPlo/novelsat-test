import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface InitialState {
	todos: Todo[];
}
const initialState: InitialState = {
	todos: [],
};

export const todosSlice = createSlice({
	name: "todos",
	initialState,
	reducers: {
		addTodo: (state, action: PayloadAction<Todo>) => {
			state.todos.push(action.payload);
		},
		removeTodo: (state, action: PayloadAction<number>) => {
			state.todos.filter((todo) => todo.id !== action.payload);
		},
		editTodo: (
			state,
			action: PayloadAction<{ id: number; placeholder: string }>
		) => {
			state.todos.map((todo) => {
				if (todo.id === action.payload.id) {
					todo.placeholder = action.payload.placeholder;
				}
				return todo;
			});
		},
	},
});

export const { addTodo, removeTodo, editTodo } = todosSlice.actions;

export const selectAllTodos = (state: RootState) => state.todos;

export default todosSlice.reducer;
