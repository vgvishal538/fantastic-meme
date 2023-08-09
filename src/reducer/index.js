import { combineReducers } from 'redux';
import moviesListReducer from './movies_list_reducer';


const rootReducer = combineReducers({
    moviesData: moviesListReducer,
});

export default rootReducer;
