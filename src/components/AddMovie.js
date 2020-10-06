import React, {useState} from 'react';

import {useContext} from 'react';

const AddMovie = () =>
{
	const [name, setName] = useState('');
	const [price, setPrice] = useState('');

	const updateName = event => {
		setName(event.target.value);
	}

	const updatePrice = event => {
		setPrice(event.target.value);
	}

	const addMovie = event => {
		event.preventDefault();
		setName('');
		setPrice('');
		// setMovies( prevMovies =>{
		// 	return { movies : [...prevMovies.movies, {name : name, price: price}]}
		// });
	}

	return(
		<form className="movie-form" onSubmit={addMovie}>
			<table>
				<tr>
					<td><label for="name">Name</label></td>
					<td><input name="name" type="text" value={name} onChange={updateName} /></td>
				</tr>
				<tr>
					<td><label for="price">Price</label></td>
					<td><input name="price" type="text" value={price} onChange={updatePrice} /></td>
				</tr>
				<button> Submit </button>
			</table>
		</form>
	);
}

export default AddMovie;
