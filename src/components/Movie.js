import React from 'react';

import {useDispatch} from "react-redux";
import {movieRemove} from "../actions/movieAddDeleteAction";

const Movie = (props) =>
{
	const dispatch = useDispatch();

	return (
		<div className = "movie-card">
			<h2>UID : {props.movie.id}</h2>
			Name : {props.movie.name}<br />
			Price : Rs. {props.movie.price}
			<br />
			<button className="delete-button" onClick = {()=>dispatch(movieRemove(props.movie.id))}>Delete</button>
		</div>
	);
}

export default Movie;
