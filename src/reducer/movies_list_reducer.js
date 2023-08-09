import {
    FETCH_MOVIES_DATA_REQUEST, FETCH_MOVIES_DATA_SUCCESS, FETCH_MOVIES_DATA_FAILURE,
} from '../actions/movies_list_actions';

const initialState = {
    moviesData: null,
    loading: false,
    error: null,
};


const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIES_DATA_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_MOVIES_DATA_SUCCESS:
            console.log("statedatareduc" + JSON.stringify(state));
            return {
                ...state,
                moviesData: action.payload.results,
                loading: false,
                error: null,
            };
        case FETCH_MOVIES_DATA_FAILURE:
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


