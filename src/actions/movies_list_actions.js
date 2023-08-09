export const FETCH_MOVIES_DATA_REQUEST = 'FETCH_MOVIES_DATA_REQUEST';
export const FETCH_MOVIES_DATA_SUCCESS = 'FETCH_MOVIES_DATA_SUCCESS';
export const FETCH_MOVIES_DATA_FAILURE = 'FETCH_MOVIES_DATA_FAILURE';



export const fetchMoviesData = (page) => ({

    type: FETCH_MOVIES_DATA_REQUEST,
    page,

});

export const fetchMoviesDataSuccess = (moviesData, page) => ({
    type: FETCH_MOVIES_DATA_SUCCESS,
    payload: moviesData,
    page
});

export const fetchMoviesDataFailure = (error) => ({
    type: FETCH_MOVIES_DATA_FAILURE,
    payload: error,
});
