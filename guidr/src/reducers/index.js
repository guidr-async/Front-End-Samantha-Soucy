import {
    FETCH_HOMEPAGE_START,
    FETCH_HOMEPAGE_SUCCESS,
    FETCH_HOMEPAGE_FAILURE,
    FETCH_USERS_START,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    ADD_USER_START,
    ADD_USER_SUCCESS,
    ADD_USER_FAILURE,
    USER_LOGIN_START,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE
} from "../actions"

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
        case FETCH_USERS_START:
            return {
                ...state,
                fetchingUsers: true,
                error: null
            };
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                fetchingInfo: false,
                guides: payload,
                error:null
            };
        case FETCH_USERS_FAILURE:
            return {
                ...state,
                fetchingInfo: false,
                error: payload
            };
        case ADD_USER_START:
            return {
                ...state,
                addingInfo: true,
                error: null
            };
        case ADD_USER_SUCCESS:
            return {
                ...state,
                guides: payload,
                addingInfo: false,
                error: null
            };
        case ADD_USER_FAILURE:
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