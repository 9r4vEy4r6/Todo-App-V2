import React from 'react';
import './css/main.css';
import './css/nav.css';
import MovieList from './components/MovieList';
import Nav from './components/Nav';
import AddMovie from './components/AddMovie';

import {MovieProvider} from './context/MovieContext';

function App() {
  return (
	  <MovieProvider>
    	  	<div className="App">
	  		<Nav />
	  		<AddMovie />
	  		<MovieList />
    		</div>
	  </MovieProvider>
  );
}

export default App;
