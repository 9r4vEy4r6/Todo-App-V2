import React from 'react';
import './css/main.css';
import './css/nav.css';
import MovieList from './components/MovieList';
import {MovieProvider} from './context/MovieContext';

function App() {
  return (
	  <MovieProvider>
    	  	<div className="App">
	  		<MovieList />
    		</div>
	  </MovieProvider>
  );
}

export default App;
