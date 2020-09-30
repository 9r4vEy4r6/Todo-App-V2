import React, {useState} from 'react';
import movies from './movies.json';

const MovieList = () =>
{
	const arr = movies.movies.map(movie => <p>{movie.name}</p>);
	return(
		[arr]
	);
}

export default MovieList;
