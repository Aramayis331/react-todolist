import './todolist.css';
import TodosElement from './todosElement/TodosElement';

let Todolist = ( {todos, onDelete, onChangeChecked} ) => {
	return (
		<div className="todolist">
			{todos.map((todo) => {
				return <TodosElement 
							key={todo.id} 
							todo={todo} 
							onDelete={onDelete}
							onChangeChecked={onChangeChecked}
							/>
			})}
		</div>
	)
}

export default Todolist;