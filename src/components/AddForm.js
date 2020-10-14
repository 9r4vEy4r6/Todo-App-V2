import React, {useState} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {todoAdd} from '../actions/todoAddDeleteAction';
import {increment} from '../actions/counterAction';

const AdderForm = (props) =>
{
	const dispatch = useDispatch();
	const counter = useSelector(state => state.counter);

	const [name, setName] = useState("");
	const [description, setDescription] = useState("");

	const changeHandlerName = (e) =>
	{
		setName(e.target.value);
	}

	const changeHandlerDescription = (e) =>
	{
		setDescription(e.target.value);
	}

	const submitForm = (e) =>
	{
		const newObj = {
			id : counter,
			name : name,
			description : description
		}
		dispatch(increment());
		dispatch(todoAdd(newObj));
		setName("");
		setDescription("");
	}

	return (
		<div className = "form-block">
			<table className="formTable">
			<tbody>
				<tr>
					<td><label htmlFor="task">Task Name </label></td>
					<td><input type="text" name="task" value={name} onChange={changeHandlerName}/></td>
				</tr>
				<tr>
					<td><label htmlFor="description">Description </label></td>
					<td><input type="text" name="description" value={description} onChange={changeHandlerDescription}/></td>
				</tr>
				<tr className="last-row">
					<td><button onClick={submitForm}>Add Task</button></td>
				</tr>
			</tbody>
			</table>
		</div>
	);
}

export default AdderForm;
