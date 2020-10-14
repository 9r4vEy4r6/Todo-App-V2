export const todoAdd = (todoObj) =>
{
	return {
		type : 'ADD_TODO',
		todo : todoObj
	}
}

export const todoRemove = (id) =>
{
	return {
		type : 'REMOVE_TODO',
		id : id
	}
}
