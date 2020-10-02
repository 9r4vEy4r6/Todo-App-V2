import React, {useState} from 'react';

import {MovieContext} from '../context/MovieContext';
import {useContext} from 'react';

const AddMovie = () =>
{
	const [name, setName] = useState('');
	const [price, setPrice] = useState('');
	const [movieState, useMovies] = useContext(MovieContext);

	const updateName = event => {
		setName(event.target.value);
	}

	const updatePrice = event => {
		setPrice(event.target.value);
	}

	const addMovie = event => {
		event.preventDefault();
	}

	return(
		<form className="movie-form">
			<label for="name">Name : </label>
			<input name="name" type="text" onChange={updateName} /><br/>
			<label for="price">Price : </label>
			<input name="price" type="text" onChange={updatePrice} /><br />
			<button> Submit </button>
		</form>
	);
}

export default AddMovie;
