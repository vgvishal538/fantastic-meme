import { put, call, takeLatest } from 'redux-saga/effects';

import { FETCH_MOVIES_DATA_REQUEST, fetchMoviesDataSuccess, fetchMoviesDataFailure } from '../actions/movies_list_actions';

import api from '../services/api';


function* getMoviesDataApi(actions) {

    const { page } = actions;

    try {

        const response = yield call(api.get, `popular?language=en-US&page=${page}`);
        yield put(fetchMoviesDataSuccess(response.data));

    } catch (error) {
        yield put(fetchMoviesDataFailure(error.message));
        console.log("error" + error);
    }
}


export function* watchMoviesData() {
    yield takeLatest(FETCH_MOVIES_DATA_REQUEST, getMoviesDataApi);
}


