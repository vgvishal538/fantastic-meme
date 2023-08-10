import {
    FETCH_SEARCH_DATA_REQUEST, FETCH_SEARCH_DATA_SUCCESS, FETCH_SEARCH_DATA_FAILURE,
} from '../actions/SearchMoviesActions';

const initialState = {
    searchData: null,
    loading: false,
    error: null,
};


const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SEARCH_DATA_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_SEARCH_DATA_SUCCESS:
            return {
                ...state,
                searchData: action.payload.results,
                loading: false,
                error: null,
            };
        case FETCH_SEARCH_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;


