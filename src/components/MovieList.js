import React from 'react';
import Movie from './Movie';

import {useSelector} from 'react-redux';

const MovieList = () =>
{
	const movieState = useSelector(state => state.movies);
	return(
		<div className="movie-list">
			{(movieState.length===0)?<h2>No movies in here!</h2>:movieState.map(movie => <Movie key={movie.id} movie={movie}/>)}
		</div>
	);
}

export default MovieList;
