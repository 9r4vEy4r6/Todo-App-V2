import React from 'react';

const Movie = (props) =>
{
	return (
		<div className = "movie-card">
			{props.movie.id}<br />
			{props.movie.name}<br />
			{props.movie.price}
		</div>
	);
}

export default Movie;
