import React, {useState} from 'react';
import moviesJSON from './movies.json';

const MovieList = () =>
{
	const [movieState, useMovies] = useState(moviesJSON);
	const arr = movieState.movies.map(movie => <p>{movie.name}</p>);
	return(
		[arr]
	);
}

export default MovieList;
