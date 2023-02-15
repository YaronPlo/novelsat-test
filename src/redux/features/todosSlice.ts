import { createSlice, nanoid } from "@reduxjs/toolkit";
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
		addTodo: {
			reducer: (state, action: PayloadAction<Todo>) => {
				state.todos = [...state.todos, action.payload];
			},
			prepare: (placeholder: string) => {
				const id = nanoid();
				const isDone = false;
				return { payload: { id, placeholder, isDone } };
			},
		},
		removeTodo: (state, action: PayloadAction<string>) => {
			state.todos = state.todos.filter((todo) => todo?.id !== action.payload);
		},
		editTodo: (
			state,
			action: PayloadAction<{ id: string; placeholder: string }>
		) => {
			state.todos.map((todo) => {
				if (todo.id === action.payload.id) {
					todo.placeholder = action.payload.placeholder;
				}
				return todo;
			});
		},
		clearTodoList: (state) => {
			state.todos = [];
		},
	},
});
export const selectAllTodos = (state: RootState) => state.todos.todos;

export const { addTodo, removeTodo, editTodo, clearTodoList } =
	todosSlice.actions;

export default todosSlice.reducer;
