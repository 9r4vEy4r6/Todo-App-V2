import React from 'react';

const Error = (props) =>
{
	return (
		<div className="single-error">
			<li>{props.message}</li>
		</div>
	);
}

export default Error;
