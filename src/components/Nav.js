import React from 'react';

import {useSelector} from 'react-redux'; 

const Nav = () =>
{
	const movieState = useSelector(state => state.movies);
	return (
		<div className="nav-div">
			<nav className="main-nav">
				<ul>
					<li><strong>The Movie Lister App</strong></li>
					<li><p> Number of movies : {movieState.length} </p></li>
				</ul>
			</nav>
		</div>
	)
}

export default Nav;
