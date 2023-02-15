import { useState } from "react";
import { FormWrapper } from "../assets/wrappers";
import { addTodo } from "../redux/features/todosSlice";
import { useAppDispatch } from "../redux/hooks/hooks";
import { ClearList } from ".";

const TodoForm = () => {
	const dispatch = useAppDispatch();
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
				<ClearList />
			</div>
		</FormWrapper>
	);
};
export default TodoForm;
