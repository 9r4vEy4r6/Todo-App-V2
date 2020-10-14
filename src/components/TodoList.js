import React, {useEffect} from 'react';
import Todo from './Todo';
import $ from "jquery";

import {useSelector} from 'react-redux';

const TodoList = () =>
{
	const todoState = useSelector(state => state.todos);
	
	useEffect(()=>{
		$(".todo-content")
			.mouseover((e)=>{
				$(e.target).toggleClass("todo-content-expand");
				console.log(e.target);
			});
	});

	return(
		<div className="todo-list">
			{(todoState.length===0)?<h2>No tasks pending!</h2>:todoState.map(todo => <Todo key={todo.id} todo={todo}/>)}
		</div>
	);
}

export default TodoList;
