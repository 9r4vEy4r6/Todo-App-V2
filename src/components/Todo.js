import React from 'react';

import {useDispatch} from "react-redux";
import {todoRemove} from "../actions/todoAddDeleteAction";

const Todo = (props) =>
{
	const dispatch = useDispatch();

	return (
		<div className = "todo-card">
			<div className="todo-content">
				<span className="heading">{props.todo.name}</span><br />
				{props.todo.description}
				<br />
				<button className="delete-button" onClick = {()=>dispatch(todoRemove(props.todo.id))}>Done!</button>
			</div>
		</div>
	);
}

export default Todo;
