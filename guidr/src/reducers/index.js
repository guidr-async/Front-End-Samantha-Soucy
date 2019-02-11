import {
    FETCH_HOMEPAGE_START,
    FETCH_HOMEPAGE_SUCCESS,
    FETCH_HOMEPAGE_FAILURE,
    FETCH_PORTFOLIO_START,
    FETCH_PORTFOLIO_SUCCESS,
    FETCH_PORTFOLIO_FAILURE,
    ADD_INFO_START,
    ADD_INFO_SUCCESS,
    ADD_INFO_FAILURE,
    USER_LOGIN_START,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE
} FROM "../actions"

const initialState = {
    trips: [],
    guides: [],
    username: "",
    fetchingInfo: false,
    fetchingUsers: false,
    loggingIn: false,
    loggedIn: false,
    error: null
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_HOMEPAGE_START:
            return {
                ...state,
                error: null,
                fetchingInfo: true
            };
        case FETCH_HOMEPAGE_SUCCESS:
            return {
                ...state,
                error: null,
                fetchingInfo: false,
                trips: payload
            };
        case FETCH_HOMEPAGE_FAILURE:
            return {
                ...state,
                fetchingInfo: false,
                error: payload
            };
        case FETCH_PORTFOLIO_START:
            return {
                ...state,
                fetchingUsers: true,
                error: null
            };
        case FETCH_PORTFOLIO_SUCCESS:
            return {
                ...state,
                fetchingInfo: false,
                guides: payload,
                error:null
            };
        case FETCH_PORTFOLIO_FAILURE:
            return {
                ...state,
                fetchingInfo: false,
                error: payload
            };
        case ADD_INFO_START:
            return {
                ...state,
                addingInfo: true,
                error: null
            };
        case ADD_INFO_SUCCESS:
            return {
                ...state,
                guides: payload,
                addingInfo: false,
                error: null
            };
        case ADD_INFO_FAILURE:
            return {
                ...state,
                error: payload,
                addingInfo: false
            };
        case USER_LOGIN_START:
            return {
                ...state,
                error: null,
                loggingIn: true,
                loggedIn: true
            };
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                error: null,
                loggedIn: true,
                loggingIn: false,
                username: payload
            };
        case USER_LOGIN_FAILURE:
            return {
                ...state,
                error: payload,
                loggedIn: false,
                loggingIn: false
            };
        default:
            return state
    }
}