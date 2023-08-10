import { combineReducers } from 'redux';
import moviesListReducer from './MoviesListReducers';
import searchMoviesReducer from './SearchDataReducers';


const rootReducer = combineReducers({
    moviesData: moviesListReducer,
    searchData: searchMoviesReducer,
});

export default rootReducer;
