import React from 'react';

import {useDispatch} from "react-redux";
import {movieRemove} from "../actions/movieAddDeleteAction";

const Movie = (props) =>
{
	const dispatch = useDispatch();

	return (
		<div className = "movie-card">
			<div className="movie-content">
				<span className="heading">Name : {props.movie.name}</span><br />
				UID : {props.movie.id}<br />
				Price : Rs. {props.movie.price}
				<br />
				<button className="delete-button" onClick = {()=>dispatch(movieRemove(props.movie.id))}>Delete</button>
			</div>
		</div>
	);
}

export default Movie;
