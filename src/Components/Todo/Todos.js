import React from 'react';
import './Todo.css'
const Todos = ({todos, deleteTodo}) => {
	const todoLists = todos.length ? (
		todos.map(todo => {
			return (
				<div className="todoItem" key={todo.id}>
					<span className="todoText" >{todo.content}</span>
					<div className="deleteTodo">
						<i onClick={()=> {deleteTodo(todo.id)}} class="material-icons">delete</i>
					</div>
				</div>
			)
		})
	) : (
		<p className="center">You have no todos's left, YAY!</p>
	)
	return (
		<div className="todos collection">
			{todoLists}
		</div>
	)
}

export default Todos;