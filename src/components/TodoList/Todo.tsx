import { useRef, useState } from "react";
import { GrFormClose, GrFormEdit, GrFormCheckmark } from "react-icons/gr";
import { TodoWrapper } from "../../assets/wrappers";
import { editTodo, removeTodo } from "../../redux/features/todosSlice";
import { useAppDispatch } from "../../redux/hooks/hooks";
interface IProps {
	todo: Todo;
}
const Todo = ({ todo }: IProps) => {
	const [checked, setChecked] = useState(false);
	const [canEdit, setCanEdit] = useState(false);
	const [edit, setEdit] = useState("");
	const editRef = useRef<HTMLInputElement>(null);
	const dispatch = useAppDispatch();

	const handleClick = () => {
		dispatch(removeTodo(todo.id));
	};

	const handleDoneEdit = () => {
		if (editRef?.current?.value) {
			dispatch(editTodo({ id: todo.id, placeholder: editRef.current.value }));
			setCanEdit(false);
			setChecked(false);
		}
	};

	return (
		<TodoWrapper isDone={checked} isEdit={canEdit}>
			<input
				type="checkbox"
				id={todo.id}
				checked={checked}
				onChange={() => setChecked(!checked)}
				disabled={canEdit}
			/>
			{!canEdit && <label htmlFor={todo.id}>{todo.placeholder}</label>}
			{canEdit && (
				<input
					type="text"
					value={edit}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setEdit(e.target.value)
					}
					ref={editRef}
				/>
			)}
			<div className="icons">
				{canEdit && <GrFormCheckmark onClick={handleDoneEdit} />}
				<GrFormEdit onClick={() => setCanEdit(!canEdit)} />
				<GrFormClose className="icon-close" onClick={handleClick} />
			</div>
			<hr />
		</TodoWrapper>
	);
};
export default Todo;
