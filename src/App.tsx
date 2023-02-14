import GlobalStyles from "./assets/GlobalStyles";
import Wrapper from "./assets/wrappers/App";
import TodoListTitle from "./components/TodoListTitle";
function App() {
	return (
		<>
			<GlobalStyles />
			<Wrapper>
				<TodoListTitle />
				<div className="todos-display">display todos list</div>
				<div className="todos-add">todo list form</div>
			</Wrapper>
		</>
	);
}

export default App;
