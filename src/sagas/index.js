import { all } from 'redux-saga/effects';
import { watchMoviesData } from './movies_list_sagas';


export default function* rootSaga() {
    yield all([
        watchMoviesData(),
    ]);
}
