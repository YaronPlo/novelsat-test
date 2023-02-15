import { isEmpty } from "lodash";
import { useState, useRef } from "react";
import { Form, AddTodoInput } from "../assets/wrappers";
import {
	addTodo,
	clearTodoList,
	selectAllTodos,
} from "../redux/features/todosSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks";

const AddTodo = () => {
	const dispatch = useAppDispatch();
	const todos = useAppSelector(selectAllTodos);
	const todoRef = useRef<HTMLInputElement>(null);

	const [value, setValue] = useState("");
	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (todoRef.current && todoRef.current.value) {
			dispatch(addTodo(todoRef.current.value));
			todoRef.current.value = "";
		}
	};

	return (
		<Form onSubmit={onSubmit}>
			<AddTodoInput
				type="text"
				value={value}
				placeholder="Add New Task..."
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					setValue(e.target.value)
				}
				ref={todoRef}
			/>
			<div className="btn">
				<button type="submit">Add</button>
				<button
					type="button"
					onClick={() => dispatch(clearTodoList())}
					disabled={isEmpty(todos)}
				>
					Reset
				</button>
			</div>
		</Form>
	);
};
export default AddTodo;
