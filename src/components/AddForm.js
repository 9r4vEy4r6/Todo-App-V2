import React, {useState} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {movieAdd} from '../actions/movieAddDeleteAction';
import {increment} from '../actions/counterAction';

const AdderForm = (props) =>
{
	const dispatch = useDispatch();
	const counter = useSelector(state => state.counter);

	const [name, setName] = useState("");
	const [price, setPrice] = useState("");

	const changeHandlerName = (e) =>
	{
		setName(e.target.value);
	}

	const changeHandlerPrice = (e) =>
	{
		setPrice(e.target.value);
	}

	const submitForm = (e) =>
	{
		const newObj = {
			id : counter,
			name : name,
			price : price
		}
		dispatch(increment());
		dispatch(movieAdd(newObj));
		setName("");
		setPrice("");
	}

	return (
		<div className = "form-block">
			<table className="formTable">
			<tbody>
				<tr>
					<td><label htmlFor="movie">Movie Name </label></td>
					<td><input type="text" name="movie" value={name} onChange={changeHandlerName}/></td>
				</tr>
				<tr>
					<td><label htmlFor="price">Movie Price </label></td>
					<td><input type="text" name="price" value={price} onChange={changeHandlerPrice}/></td>
				</tr>
				<tr className="last-row">
					<td><button onClick={submitForm}>Add Movie</button></td>
				</tr>
			</tbody>
			</table>
		</div>
	);
}

export default AdderForm;
