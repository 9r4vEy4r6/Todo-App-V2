import todoAddDeleteReducer from './todoAddDeleteReducer';
import counterReducer from './counterReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
	todos : todoAddDeleteReducer,
	counter : counterReducer
})

export default rootReducer;
