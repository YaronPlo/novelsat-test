import { map } from "lodash";
import { selectAllTodos } from "../../redux/features/todosSlice";
import { useAppSelector } from "../../redux/hooks/hooks";
import TodoItem from "./TodoItem";

const TodoList = () => {
	const todos = useAppSelector(selectAllTodos);

	return (
		<>
			{map(todos, (todo) => {
				return <TodoItem key={todo.id} todo={todo} />;
			})}
		</>
	);
};
export default TodoList;
