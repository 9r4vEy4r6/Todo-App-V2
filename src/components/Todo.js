import React from 'react';

import {useDispatch} from "react-redux";
import {todoRemove} from "../actions/todoAddDeleteAction";

const Todo = (props) =>
{
	const dispatch = useDispatch();
	const mouseEnterHandler = (e) => {
		e.target.className = "todo-content todo-content-expand";
	};

	const mouseLeaveHandler = (e) => {
		e.target.className = "todo-content";
	}

	return (
		<div className = "todo-card">
			<div className="todo-content" onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
				<span className="heading">{props.todo.name}</span><br />
				{props.todo.description}
				<br />
				<button className="delete-button" onClick = {()=>dispatch(todoRemove(props.todo.id))}>Done!</button>
			</div>
		</div>
	);
}

export default Todo;
