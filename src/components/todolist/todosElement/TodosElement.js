import { useState } from 'react';
import './todosElement.css';

let TodosElement = ( {todo, onDelete, onChangeChecked} ) => {

const [todoChecked, setTodoChecked] = useState(false);

	return (
		<div className={todoChecked ? 'todosElementTrue' : 'todosElementFalse'}>
			<span	
				className={todoChecked ? 'checkboxTrue' : 'checkboxFalse'} 
				onClick={() => { todoChecked ? setTodoChecked(false) : setTodoChecked(true)
				onChangeChecked(todo)}}
			></span>
			<span className={todoChecked ? 'todoTextTrue' : 'todoTextFalse'}>{todo.text}</span>
			<span className='todoDelete' onClick={() => {
				onDelete(todo);
			}}>x</span>
		</div>
	)
}

export default TodosElement;