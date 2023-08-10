import { put, call, takeLatest } from 'redux-saga/effects';

import { FETCH_SEARCH_DATA_REQUEST, fetchSearchDataSuccess, fetchSearchDataFailure } from '../actions/SearchMoviesActions';

import api from '../services/api';


function* getSearchDataApi(actions) {

    const { page, query } = actions;

    try {
        const response = yield call(api.get, `search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`);
        yield put(fetchSearchDataSuccess(response.data));

    } catch (error) {
        yield put(fetchSearchDataFailure(error.message));
        console.log("error" + error);
    }
}


export function* watchSearchData() {
    yield takeLatest(FETCH_SEARCH_DATA_REQUEST, getSearchDataApi);
}


