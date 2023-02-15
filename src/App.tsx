import GlobalStyles from "./assets/GlobalStyles";
import { AppWrapper } from "./assets/wrappers";
import { AddTodo, TodoList, TodoListTitle } from "./components";

const App = () => {
	return (
		<>
			<GlobalStyles />
			<AppWrapper>
				<TodoListTitle />
				<TodoList />
				<AddTodo />
			</AppWrapper>
		</>
	);
};

export default App;
