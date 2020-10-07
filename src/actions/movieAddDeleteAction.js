export const movieAdd = (movieObj) =>
{
	return {
		type : 'ADD_MOVIE',
		movie : movieObj
	}
}

export const movieRemove = (id) =>
{
	return {
		type : 'REMOVE_MOVIE',
		id : id
	}
}
