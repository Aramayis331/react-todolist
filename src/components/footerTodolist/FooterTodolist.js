import './footerTodolist.css';

let FooterTodolist = ({ todos, onClearCompleted }) => {

	let completedSize = todos.filter(todo => todo.isCompleted).length

	return (
		<div className='footerTodolist'>
			<span className='footerSpan'>{completedSize}/{todos.length} Completed</span>
			<button className='footerButton' onClick={onClearCompleted}>Clear Completed</button>
		</div>
	)
}

export default FooterTodolist;