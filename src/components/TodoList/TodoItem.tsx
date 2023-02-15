import { useState } from "react";
import { GrFormClose, GrFormEdit, GrFormCheckmark } from "react-icons/gr";
import { TodoWrapper } from "../../assets/wrappers";
import {
	setIsDone,
	editTodo,
	removeTodo,
} from "../../redux/features/todosSlice";
import { useAppDispatch } from "../../redux/hooks/hooks";
interface IProps {
	todo: Todo;
}

const TodoItem = ({ todo }: IProps) => {
	const [onEdit, setOnEdit] = useState(false);
	const [editText, setEditText] = useState(todo?.placeholder || "");
	const dispatch = useAppDispatch();

	const handleClick = () => {
		dispatch(removeTodo(todo.id));
	};

	const handleDoneEdit = () => {
		if (editText) {
			dispatch(editTodo({ id: todo.id, placeholder: editText }));
			dispatch(setIsDone({ id: todo.id, isDone: false }));
			setOnEdit(false);
		}
	};

	const handleCheckedTodo = () => {
		dispatch(setIsDone({ id: todo.id, isDone: !todo.isDone }));
	};

	return (
		<TodoWrapper isDone={todo.isDone} onEdit={onEdit}>
			<input
				type="checkbox"
				id={todo.id}
				checked={todo.isDone}
				onChange={handleCheckedTodo}
				disabled={onEdit}
			/>
			<label htmlFor={todo.id}>{todo.placeholder}</label>
			<input
				type="text"
				value={editText}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					setEditText(e.target.value)
				}
			/>

			<div className="icons">
				{onEdit && <GrFormCheckmark onClick={handleDoneEdit} />}
				<GrFormEdit onClick={() => setOnEdit(!onEdit)} />
				<GrFormClose onClick={handleClick} />
			</div>
			<hr />
		</TodoWrapper>
	);
};
export default TodoItem;
