import { all } from 'redux-saga/effects';
import { watchMoviesData } from './MoviesListSagas';
import { watchSearchData } from './SearchDataSagas';


export default function* rootSaga() {
    yield all([
        watchMoviesData(),
        watchSearchData(),
    ]);
}
