import React, {useState} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {movieAdd} from '../actions/movieAddDeleteAction';

const AdderForm = (props) =>
{
	const dispatch = useDispatch();
	const movies = useSelector(state => state.movies);

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
			id : movies.length+1,
			name : name,
			price : price
		}
		dispatch(movieAdd(newObj));
		setName("");
		setPrice("");
	}

	return (
		<div className = "form-block">
				<input type="text" name="movie" value={name} onChange={changeHandlerName}/>
				<input type="text" name="price" value={price} onChange={changeHandlerPrice}/>
				<button onClick={submitForm}>Add Movie</button>
		</div>
	);
}

export default AdderForm;
