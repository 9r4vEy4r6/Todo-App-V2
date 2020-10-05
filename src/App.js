import React from 'react';
import './css/main.css';
import './css/nav.css';

import {useSelector} from 'react-redux';

function App() {
	const counter = useSelector( state => state.counter );
	const isLogged = useSelector( state=> state.isLogged );
  	return (
	  	<div>
			<p>{counter}</p>
			{ isLogged ? <h3> Value to be seen only after LogIn</h3>: ""}
		</div>
  	);
}

export default App;
