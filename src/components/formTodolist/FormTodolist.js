import { useState } from 'react';
import './formTodolist.css';

let FormTodolist = ( {addTodos} ) => {

	const [text, setText] = useState('');
	const [textDirty, setTextDirty] = useState(false);

	let onTextError = () => {
		if(text.length === 0) {
			setTextDirty(true);
		}else {
			setTextDirty(false);
		}
	}

	return (
		<div>
			<form className='formTodolist' onSubmit={(e) => {
				onTextError();
				e.preventDefault();
				if(text.length  > 0) {
					addTodos(text);
					setText('');
				}
				
				}}>
				<input type='text' name='task' value={text} placeholder='Add a todo' className='formInput' 
				onChange={(e) => {
					setText(e.target.value)
				}}/>
				<button className='formButton'>Add Todo</button>
			</form>
			<span className={textDirty ? 'textErrorOnn' : 'textErrorOff'}>Field cannot be empty</span>
		</div>
	)
}

export default FormTodolist;