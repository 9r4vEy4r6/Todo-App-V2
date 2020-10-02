import React, {useState} from 'react';
import Movie from './Movie';
import moviesJSON from './movies.json';

const MovieList = () =>
{
	const [movieState, useMovies] = useState(moviesJSON);
	const arr = movieState.movies.map(movie => <Movie name={movie.name}/>);
	return(
		<div className="movie-list">
			{arr}
		</div>
	);
}

export default MovieList;
