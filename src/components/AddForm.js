import React, {useState} from 'react';

import {useDispatch} from 'react-redux';
import {movieAdd} from '../actions/movieAddDeleteAction';

const AdderForm = () =>
{
	const [name, setName] = useState("");
	const [price, setPrice] = useState("");
	const [errors, setErrors] = useState([]);

	const changeHandler = (e) =>
	{
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

	return (
		<div className = "form-block">
			<form>
				<input type="text" name="movie" value={name} onChange={changeHandler}/>
				<input type="text" name="price" value={price} onChange={changeHandler}/>
				<button>Add Movie</button>
			</form>
		</div>
	);
}

export default AdderForm;
