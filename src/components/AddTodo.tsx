import { isEmpty } from "lodash";
import { useState } from "react";
import { FormWrapper } from "../assets/wrappers";
import {
	addTodo,
	clearTodoList,
	selectAllTodos,
} from "../redux/features/todosSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks";

const AddTodo = () => {
	const dispatch = useAppDispatch();
	const todos = useAppSelector(selectAllTodos);
	const [value, setValue] = useState("");

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (value) {
			dispatch(addTodo(value));
			setValue("");
		}
	};

	return (
		<FormWrapper onSubmit={onSubmit}>
			<div className="input">
				<span>TODO:</span>
				<input
					className="input-field"
					type="text"
					placeholder="Add Todo..."
					value={value}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setValue(e.target.value)
					}
				/>
			</div>
			<div className="btn">
				<button className="btn-submit" type="submit">
					Add Todo
				</button>
				<button
					className="btn-reset"
					type="button"
					onClick={() => dispatch(clearTodoList())}
					disabled={isEmpty(todos)}
				>
					Clear List
				</button>
			</div>
		</FormWrapper>
	);
};
export default AddTodo;
