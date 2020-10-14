import React from 'react';
import './css/main.css';
import './css/nav.css';

import Nav from './components/Nav';
import TodoList from './components/TodoList';
import AdderForm from './components/AddForm';

function App() {

  	return (
	  	<div>
			<Nav />
			<AdderForm />
			<TodoList />
		</div>
  	);
}

export default App;
