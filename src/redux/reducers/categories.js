import {
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_FAIL,
    GET_CATEGORIES_LIST_SUCCESS,
    GET_CATEGORIES_LIST_FAIL
} from '../actions/types';

const initialState = {
    category: null,
    categories: null,
};

export default function categories(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: payload.categories
            }
        case GET_CATEGORIES_FAIL:
            return {
                ...state,
                categories: null
            }
        case GET_CATEGORIES_LIST_SUCCESS:
            return {
                ...state,
                category: payload.results.category
            }
        case GET_CATEGORIES_LIST_FAIL:
            return {
                ...state,
                category: null
            }
        default:
            return state
    }
};