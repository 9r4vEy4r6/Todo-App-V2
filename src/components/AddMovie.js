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
			<table>
				<tr>
					<td><label for="name">Name</label></td>
					<td><input name="name" type="text" onChange={updateName} /></td>
				</tr>
				<tr>
					<td><label for="price">Price</label></td>
					<td><input name="price" type="text" onChange={updatePrice} /></td>
				</tr>
				<button> Submit </button>
			</table>
		</form>
	);
}

export default AddMovie;
