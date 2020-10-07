import React from 'react';
import './css/main.css';
import './css/nav.css';

import Nav from './components/Nav';
import MovieList from './components/MovieList';
import AdderForm from './components/AddForm';

function App() {

  	return (
	  	<div>
			<Nav />
			<AdderForm />
			<MovieList />
		</div>
  	);
}

export default App;
