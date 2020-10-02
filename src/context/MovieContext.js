import React, {useState, createContext} from 'react';
import moviesJSON from '../components/movies.json';

export const MovieContext = createContext();

export const MovieProvider = (props) =>
{
	const [movieState, useMovies] = useState(moviesJSON);
	return (
		<MovieContext.Provider>
			{ props.children }
		</MovieContext.Provider>
	);
}
