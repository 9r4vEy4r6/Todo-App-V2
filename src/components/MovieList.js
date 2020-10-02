import React, {useState} from 'react';
import Movie from './Movie';
import Nav from './Nav';
import moviesJSON from './movies.json';

const MovieList = () =>
{
	const [movieState, useMovies] = useState(moviesJSON);
	return(
		<div className="movie-list">
			<Nav />
			{movieState.movies.map(movie => <Movie movie={movie}/>)}
		</div>
	);
}

export default MovieList;
