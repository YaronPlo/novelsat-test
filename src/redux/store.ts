import { configureStore } from "@reduxjs/toolkit";
import todoList from "./features/todosSlice";
export const store = configureStore({
	reducer: todoList,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
