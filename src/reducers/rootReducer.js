import movieAddDeleteReducer from './movieAddDeleteReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
	movies : movieAddDeleteReducer
})

export default rootReducer;
