export const FETCH_SEARCH_DATA_REQUEST = 'FETCH_SEARCH_DATA_REQUEST';
export const FETCH_SEARCH_DATA_SUCCESS = 'FETCH_SEARCH_DATA_SUCCESS';
export const FETCH_SEARCH_DATA_FAILURE = 'FETCH_SEARCH_DATA_FAILURE';



export const fetchSearchData = (page, query) => ({

    type: FETCH_SEARCH_DATA_REQUEST,
    page,
    query,

});

export const fetchSearchDataSuccess = (searchData) => ({
    type: FETCH_SEARCH_DATA_SUCCESS,
    payload: searchData,

});

export const fetchSearchDataFailure = (error) => ({
    type: FETCH_SEARCH_DATA_FAILURE,
    payload: error,
});
