const movieAddDeleteReducer = (state=[], action) =>
{
	switch(action.type)
	{
		case 'ADD_MOVIE':
			return [ ...state, action.movie ];
		case 'REMOVE_MOVIE':
			return state.filter( st=> st.id !== action.id);
		default:
			return state;
	}
}

export default movieAddDeleteReducer;