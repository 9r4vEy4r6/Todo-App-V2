import React from 'react';
import './css/main.css';
import './css/nav.css';

import Nav from './components/Nav';
import MovieList from './components/MovieList';

function App() {

  	return (
	  	<div>
			<Nav />
			<MovieList />
		</div>
  	);
}

export default App;
