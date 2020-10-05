import React from 'react';
import './css/main.css';
import './css/nav.css';

import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, login} from  './actions/index';

function App() {
	const counter = useSelector( state => state.counter );
	const isLogged = useSelector( state=> state.logged );
	const dispatch = useDispatch();

  	return (
	  	<div>
			<button onClick={()=>dispatch(increment())} > + </button>
			<button onClick={()=>dispatch(decrement())} > - </button>
			<button onClick={()=>dispatch(login())} > LogIn </button>

			<p>{counter}</p>
			{ isLogged ? <h3> Value to be seen only after LogIn</h3>: ""}
		</div>
  	);
}

export default App;
