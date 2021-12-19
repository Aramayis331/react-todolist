import './App.css';
import { useState } from 'react';
import Todolist from './components/todolist/Todolist';
import FormTodolist from './components/formTodolist/FormTodolist';
import FooterTodolist from './components/footerTodolist/FooterTodolist';



function App() {

	const [todos, setTodos] = useState([
		{
			id: Math.random(),
			text: 'HTML',
			isCompleted: false,
		},
		{
			id: Math.random(),
			text: 'CSS',
			isCompleted: false,
		},
		{
			id: Math.random(),
			text: 'JS',
			isCompleted: false,
		},
	]);

	return (
		<div className="App">
			<FormTodolist addTodos={(text) => {
				setTodos([
					...todos,
					{
						id: Math.random(),
						text: text,
						isCompleted: false,
					}
				])
			}}/>
			<Todolist	todos={todos} 
						onDelete={(todo) => {
				setTodos(todos.filter(e => e.id !== todo.id));
			}} 
						onChangeChecked={(newTodo) => {
							setTodos(todos.map((todo) => {
								if(newTodo.id === todo.id) {
									return {
										...todo,
										isCompleted: !todo.isCompleted
									}
								} else {
									return todo
								}
							}))
						}}
			/>
			<FooterTodolist todos={todos} onClearCompleted={() => {
				setTodos(todos.filter(e => !e.isCompleted));
			}} />
		</div>
	);
}

export default App;
