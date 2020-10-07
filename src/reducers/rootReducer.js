import movieAddDeleteReducer from './movieAddDeleteReducer';
import counterReducer from './counterReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
	movies : movieAddDeleteReducer,
	counter : counterReducer
})

export default rootReducer;
