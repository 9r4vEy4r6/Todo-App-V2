import React from 'react';

import {useSelector} from 'react-redux'; 

const Nav = () =>
{
	const todoState = useSelector(state => state.todos);
	return (
		<div className="nav-div">
			<nav className="main-nav">
				<ul>
					<li><strong>The TODO App</strong></li>
					<li><p> Number of tasks pending : {todoState.length} </p></li>
				</ul>
			</nav>
		</div>
	)
}

export default Nav;
