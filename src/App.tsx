import GlobalStyles from "./assets/GlobalStyles";
import { AppWrapper } from "./assets/wrappers";
import { TodoForm, TodoList, TodoListTitle } from "./components";

const App = () => {
	return (
		<>
			<GlobalStyles />
			<AppWrapper>
				<TodoListTitle />
				<TodoList />
				<TodoForm />
			</AppWrapper>
		</>
	);
};

export default App;
