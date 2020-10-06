import React from 'react';

import {useContext} from 'react';

const Nav = () =>
{
	return (
		<div className="nav-div">
			<nav className="main-nav">
				<ul>
					<li><strong>The nav</strong></li>
					// <li><p> List of movies : {movieState.movies.length} </p></li>
				</ul>
			</nav>
		</div>
	)
}

export default Nav;
