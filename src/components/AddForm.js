import React, {useState} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {movieAdd} from '../actions/movieAddDeleteAction';

import Error from './Error';

const AdderForm = (props) =>
{
	const dispatch = useDispatch();
	const movies = useSelector(state => state.movies);

	const [name, setName] = useState("");
	const [price, setPrice] = useState("");
	const [errors, setErrors] = useState([]);

	const changeHandler = (e) =>
	{
		setErrors([]);
		switch(e.target.name)
		{
			case "movie":
				setName(e.target.value);
				return;
			case "price":
				setPrice(e.target.price);
				return;
			default :
				console.log(e.target.name+" no handler found in form");
		}
	}

	const submitForm = (e) =>
	{
		if(name.length>0)
			setErrors( [ ...errors, "Name of movie is empty"] );
		if(price.length>0)
			setErrors( [ ...errors, "Price of movie is empty"] );
		if(errors.length>0)
			return;
		console.log("Name : "+ name + "Price : " + price + "Errors : " + errors) 

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
			<div className = {(errors.length===0)?"":"error-block"}> 
				{ errors.map(message => <Error message={message} />) }
			</div>
				<input type="text" name="movie" value={name} onChange={changeHandler}/>
				<input type="text" name="price" value={price} onChange={changeHandler}/>
				<button onClick={submitForm}>Add Movie</button>
		</div>
	);
}

export default AdderForm;
