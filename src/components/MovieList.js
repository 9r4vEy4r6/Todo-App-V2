import React, {useState} from 'react';
import Movie from './Movie';

import {MovieContext} from '../context/MovieContext';
import {useContext} from 'react';

const MovieList = () =>
{
	const [movieState, useMovies] = useContext(MovieContext);
	return(
		<div className="movie-list">
			{movieState.movies.map(movie => <Movie movie={movie}/>)}
		</div>
	);
}

export default MovieList;
