import React from 'react';

const Movie = (props) =>
{
	return (
		<div className = "movie-card">
			<h2>{props.movie.id}</h2>
			Name : {props.movie.name}<br />
			Price : Rs. {props.movie.price}
		</div>
	);
}

export default Movie;
