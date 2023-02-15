import { isEmpty } from "lodash";
import { clearTodoList, selectAllTodos } from "../redux/features/todosSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks";

const ClearList = () => {
	const todos = useAppSelector(selectAllTodos);
	const dispatch = useAppDispatch();
	return (
		<button
			className="btn-reset"
			type="button"
			onClick={() => dispatch(clearTodoList())}
			disabled={isEmpty(todos)}
		>
			Clear List
		</button>
	);
};
export default ClearList;
