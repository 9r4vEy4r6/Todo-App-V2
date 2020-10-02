import React from 'react';

const Movie = (props) =>
{
	return (
		<div className = "movie-card">
			{props.name}
		</div>
	);
}

export default Movie;
