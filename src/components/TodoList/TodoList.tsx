import { map } from "lodash";
import { selectAllTodos } from "../../redux/features/todosSlice";
import { useAppSelector } from "../../redux/hooks/hooks";
import Todo from "./Todo";

const TodoList = () => {
	const todos = useAppSelector(selectAllTodos);

	return (
		<>
			{map(todos, (todo) => {
				return <Todo key={todo.id} todo={todo} />;
			})}
		</>
	);
};
export default TodoList;
